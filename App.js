// import React, {useState, useEffect} from 'react';
// import {
//   TouchableNativeFeedback,
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
// } from 'react-native';
// import Routes from './Routes';
// import {Provider} from 'unstated';
// import {withAuthenticator} from 'aws-amplify-react-native';
// import Amplify, {Auth} from 'aws-amplify';
// const NOTSIGNIN = 'You are NOT logged in';
// const SIGNEDIN = 'You have logged in successfully';
// const SIGNEDOUT = 'You have logged out successfully';
// const WAITINGFOROTP = 'Enter OTP number';
// const VERIFYNUMBER = 'Verifying number (Country code +XX needed)';
// function App() {
// const [message, setMessage] = useState('Welcome to Demo');
// const [user, setUser] = useState(null);
// const [session, setSession] = useState(null);
// const [otp, setOtp] = useState('');
// const [number, setNumber] = useState('');
// const password = Math.random().toString(10) + 'Abc#';
// useEffect(() => {
//   verifyAuth();
// }, []);

// const verifyAuth = () => {
//   Auth.currentAuthenticatedUser()
//     .then((user) => {
//       setUser(user);
//       setMessage(SIGNEDIN);
//       setSession(null);
//     })
//     .catch((err) => {
//       console.error(err);
//       setMessage(NOTSIGNIN);
//     });
// };
// const signOut = () => {
//   if (user) {
//     Auth.signOut();
//     setUser(null);
//     setOtp('');
//     setMessage(SIGNEDOUT);
//   } else {
//     setMessage(NOTSIGNIN);
//   }
// };
// const signIn = () => {
//   setMessage(VERIFYNUMBER);
//   Auth.signIn(number)
//     .then((result) => {
//       setSession(result);
//       setMessage(WAITINGFOROTP);
//     })
//     .catch((e) => {
//       if (e.code === 'UserNotFoundException') {
//         signUp();
//       } else if (e.code === 'UsernameExistsException') {
//         setMessage(WAITINGFOROTP);
//         signIn();
//       } else {
//         console.log(e.code);
//         console.error(e);
//       }
//     });
// };
// const signUp = async () => {
//   const result = await Auth.signUp({
//     username: number,
//     password,
//     attributes: {
//       phone_number: number,
//     },
//   }).then(() => signIn());
//   return result;
// };
// const verifyOtp = () => {
//   Auth.sendCustomChallengeAnswer(session, otp)
//     .then((user) => {
//       setUser(user);
//       setMessage(SIGNEDIN);
//       setSession(null);
//     })
//     .catch((err) => {
//       setMessage(err.message);
//       setOtp('');
//       console.log(err);
//     });
// };
//   return (
//     <>
//       <View>
//         <Text>SHEEESH {message}</Text>
//       </View>
//       {!user && !session && (
// <View>
//   <TextInput
//     style={styles.input}
//     onChangeText={setNumber}
//     value={number}
//     placeholder="phonenumberr"
//     keyboardType="numeric"
//   />
//   <TouchableNativeFeedback onPress={signIn}>
//     <View style={styles.page4otpbutton}>
//       <Text style={{color: 'white', fontSize: 18}}>SEND OTP</Text>
//     </View>
//   </TouchableNativeFeedback>
// </View>
//       )}
//       {!user && session && (
// <View>
//   <TextInput
//     style={styles.input}
//     onChangeText={setOtp}
//     value={otp}
//     placeholder="otp"
//     keyboardType="numeric"
//   />
//   <TouchableNativeFeedback onPress={verifyOtp}>
//     <View style={styles.page4otpbutton}>
//       <Text style={{color: 'white', fontSize: 18}}>Verify OTP</Text>
//     </View>
//   </TouchableNativeFeedback>
// </View>
//       )}
//       {user && !session && (
//         <Provider>
//           <Routes />
//         </Provider>
//       )}
//     </>
//   );
// }
// export default App;
// const styles = StyleSheet.create({
//   input: {
//     textAlign: 'center',
//     fontSize: 18,
//     height: 66,
//     width: 233,
//     backgroundColor: 'gray',
//     borderRadius: 30,
//     marginTop: 20,
//   },
//   page4otpbutton: {
//     backgroundColor: '#FCCF08',
//     height: 66,
//     width: 201,
//     borderRadius: 30,
//     marginTop: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
import React, {useState, useEffect} from 'react';
import Routes from './Routes';
import {Provider} from 'unstated';

function App() {
  return (
    <>
      <Provider>
        <Routes />
      </Provider>
    </>
  );
}
export default App;
