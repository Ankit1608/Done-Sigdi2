import gql from 'graphql-tag';

const check = gql`
  query {
    hello
  }
`;
const bye = gql`
  query {
    bye
  }
`;
const users = gql`
  query {
    users {
      id
      email
    }
  }
`;
const register = gql`
  mutation($email: String!, $password: String!) {
    createUser(email: $email, password: $password)
  }
`;

const login = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      user {
        id
        email
      }
    }
  }
`;
const logout = gql`
  mutation {
    logout
  }
`;
const storePhonenumber = gql`
  mutation($phonenumber: String!) {
    storePhonenumber(phonenumber: $phonenumber)
  }
`;
const userOtp = gql`
  mutation($phone_number: String!, $pin: String!) {
    userOtp(phonenumber: $phone_number, pin: $pin) {
      accessToken
    }
  }
`;
const userDetails = gql`
  mutation($name: String!, $email: String!) {
    userDetails(name: $name, email: $email)
  }
`;
const userLocation = gql`
  mutation($address: String, $longitude: String!, $latitude: String!) {
    userLocation(address: address, longitude: $longitude, latitude: $latitude)
  }
`;

export {
  check,
  register,
  users,
  login,
  bye,
  logout,
  storePhonenumber,
  userOtp,
  userDetails,
  userLocation,
};
