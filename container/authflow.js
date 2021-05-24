import {Container} from 'unstated';
import {Auth} from 'aws-amplify';

class AuthContainer extends Container {
  onepass = '';
  NOTSIGNIN = 'You are NOT logged in';
  SIGNEDIN = 'You have logged in successfully';
  SIGNEDOUT = 'You have logged out successfully';
  WAITINGFOROTP = 'Enter OTP number';
  VERIFYNUMBER = 'Verifying number (Country code +XX needed)';
  state = {
    user: null,
    session: null,
    otp: null,
    number: null,
    message: 'Welcome',
    password: Math.random().toString(10) + 'Abc#',
  };
  verifyAuth = () => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        this.setState({user: user});
        this.setState({message: this.SIGNEDIN});
        this.setState({session: null});
      })
      .catch((err) => {
        console.error(err);
        this.setState({message: this.NOTSIGNIN});
      });
  };
  signOut = () => {
    if (this.state.user) {
      Auth.signOut();
      this.setState({user: null});
      this.setState({otp: ''});
      this.setState({message: this.SIGNEDOUT});
    } else {
      this.setState({message: this.NOTSIGNIN});
    }
  };
  signIn = () => {
    this.setState({message: this.VERIFYNUMBER});
    let localnumber = String(this.state.number);
    Auth.signIn(localnumber)
      .then((result) => {
        console.log('inside signin');
        this.setState({session: result});
        this.setState({message: this.WAITINGFOROTP});
      })
      .catch((e) => {
        if (e.code === 'UserNotFoundException') {
          console.log('signin');
          this.signUp();
        } else if (e.code === 'UsernameExistsException') {
          console.log('signin2');
          this.setState({message: this.WAITINGFOROTP});
          this.signIn();
        } else {
          console.log('signin3');
          console.log(e.code);
          console.error(e);
        }
      });
  };
  signUp = async () => {
    let localusername = String(this.state.number);
    let localpassword = String(this.state.password);
    const result = await Auth.signUp({
      username: localusername,
      password: localpassword,
      attributes: {
        phone_number: localusername,
      },
    })
      .then(() => this.signIn())
      .catch((err) => {
        console.error(err);
        console.log(err);
      });
    return result;
  };
  verifyOtp = () => {
    let localsession = String(this.state.session);
    let localotp = String(this.state.otp);
    console.log('session' + localsession);
    console.log('otp' + localotp);
    Auth.sendCustomChallengeAnswer(localsession, '1234')
      .then((user) => {
        console.log('wassup');
        this.setState({user: user});
        this.setState({message: this.SIGNEDIN});
        this.setState({session: null});
      })
      .catch((err) => {
        this.setState({message: err.message});
        this.setState({otp: ''});
        console.log(err);
      });
  };
  setOtp = (op) => {
    let ottp = '' + op;
    this.onepass = op;
    this.setState({otp: ottp}, () => {
      console.log(this.state.otp);
    });
    console.log('inside set otp' + this.state.otp);
    console.log(this.state.number);
  };
  setPhone = (num) => {
    let phonenum = '+91' + num;
    this.setState({number: phonenum});
  };
}

export default AuthContainer;
