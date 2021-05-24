const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: ID
    bye: String
    findfood(id: ID!): [foodPreview]!
    findSeller(id: ID!): sellerStructure!
  }
  type foodPreview {
    id: ID!
    rating: String!
    currently_available: [currently_available_structure]
    pre_order: [pre_order_structure]
  }
  type sellerStructure {
    name: String
    profile_picture: String
    cover_picture: String
    phone_number: String
    email_id: String
    location: String
    rating: String
    about: String
    open: Boolean
    currently_available: [currently_available_structure]
    pre_order: [pre_order_structure]
  }
  type LoginResponse {
    accessToken: String!
  }
  type currently_available_structure {
    dish_name: String!
    pre_order_id: String!
    img_link: String
    cost: String!
    veg: Boolean!
    availability: Boolean!
    stock: String!
    serves: String!
    tags: [String]!
  }
  type pre_order_structure {
    dish_name: String!
    preorder_id: String!
    img_link: String
    cost: String!
    veg: Boolean!
    availability: Boolean!
    time_to_cook: String!
    limit: String!
    serves: String!
    tags: [String]!
  }

  type Mutation {
    createSeller(name: String!, phonenumber: String!): Boolean!
    storePhonenumber(phonenumber: String!): Boolean!
    userOtp(phonenumber: String!, pin: String!): LoginResponse!
    userDetails(name: String!, email: String!): Boolean!
    userLocation(
      address: String!
      longitude: String!
      latitude: String!
    ): Boolean!
    revokeRefreshToken(userId: String!): Boolean!
    logout: Boolean!
  }
`;
module.exports = { typeDefs };
