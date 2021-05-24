const { Users } = require("./models/User");
const { Sellers, Customers } = require("./models/Sigdi");
const { hash, compare } = require("bcryptjs");
const { createAccessToken, createRefeshToken } = require("./auth");
const { sendRefreshToken } = require("./sendRefreshToken");
const { getcurrUser, setCurrUser } = require("./currUser");
const { getDistance } = require("./getDistance");
const resolvers = {
  Query: {
    bye: () => "bye",
    me: () => getcurrUser(),
    findfood: async (_, { id }) => {
      const allSeller = await Sellers.find();
      const currCustomer = await Customers.findById(id);
      let currCustomeradd = "";
      let sellersAround = [];
      let result = [];
      let temp = {};
      if (!currCustomer) throw Error("could not find the user");
      currCustomer.address_book.map((add) => {
        if (add.place === currCustomer.location) currCustomeradd = add.position;
      });
      if (currCustomeradd === "") throw Error("no user location");
      allSeller.map((s) => {
        if (getDistance(s.location, currCustomeradd) <= 6)
          sellersAround.push(s);
      });

      sellersAround.map((s) => {
        temp.currently_available = s.currently_available;
        temp.pre_order = s.pre_order;
        temp.id = s.id;
        temp.rating = s.rating;
        result.push(temp);
        temp = {};
      });
      return result;
    },
    findSeller: async (_, { id }) => {
      try {
        return Sellers.findById(id);
      } catch (err) {
        throw new Error("wrong input");
      }
    },
  },
  Mutation: {
    createSeller: async (_, { name, phonenumber }) => {
      const Seller = new Sellers({ name: name, phone_number: phonenumber });
      try {
        await Seller.save();
      } catch (err) {
        console.log(err);
        return false;
      }
      return true;
    },
    userLocation: async (_, { address, longitude, latitude }) => {},
    userDetails: async (_, { name, email }, { req }) => {
      try {
        const res = await Customers.findOneAndUpdate(
          {
            phone_number: "9949694474",
          },
          {
            $set: {
              name: name,
              email_id: email,
            },
          },
          { useFindAndModify: false }
        );
        if (res) {
          return true;
        }
      } catch (err) {
        throw new Error("invalid input");
      }
    },
    storePhonenumber: async (_, { phonenumber }) => {
      const Customer = await Customers.findOne({
        phone_number: String(phonenumber),
      });
      if (!Customer) {
        const newCustomer = new Customers({ phone_number: phonenumber });
        try {
          await newCustomer.save();
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return true;
    },
    userOtp: async (_, { phonenumber, pin }, { res }) => {
      const Customer = await Customers.findOne({
        phone_number: String(phonenumber),
      });
      if (!Customer) {
        throw new Error("could  not find the user");
      }
      if (pin === "5678") {
        setCurrUser(Customer.id);
        sendRefreshToken(res, createRefeshToken(Customer));
        return { accessToken: createAccessToken(Customer) };
      }
      throw new Error("wrong otp");
    },
    logout: async (_, {}, { res }) => {
      console.log(res);
      sendRefreshToken(res, " ");
      return true;
    },

    revokeRefreshToken: async (_, { userId }) => {
      const User = await Users.findByIdAndUpdate(userId, {
        $inc: { tokenVersion: 1 },
      });
      if (!User) {
        throw new Error("could not find the user");
      }
      return true;
    },
  },
};
module.exports = { resolvers };
