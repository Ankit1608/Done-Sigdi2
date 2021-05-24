const mongoose = require("mongoose");
let customerSchema = new mongoose.Schema(
  {
    name: String,
    phone_number: String,
    email_id: String,
    location: String,
    tokenVersion: {
      type: Number,
      default: 0,
    },
    address_book: [
      {
        place: String,
        position: String,
      },
    ],
    orders: [
      {
        transaction_id: String,
        order: [
          {
            dish_name: String,
            dish_quantity: String,
          },
        ],
        cost: String,
        time_stamp: String,
        seller_id: String,
        seller_name: String,
        delivery_guy_id: String,
        delivery_guy_name: String,
      },
    ],
    reviews: [
      {
        order_id: String,
        seller_id: String,
        seller_name: String,
        rating: String,
        comment: String,
      },
    ],
    payments: [
      {
        order_id: String,
        transaction_id: String,
        time_stamp: String,
        cost: String,
      },
    ],
    bookmarks: [
      {
        seller_id: String,
        seller_name: String,
        rating: String,
        profile_picture: String,
        cover_picture: String,
      },
    ],
    notifications: [
      {
        header: String,
        content: String,
        time_stamp: String,
      },
    ],
  },
  { collection: "customer" }
);
let sellerSchema = new mongoose.Schema(
  {
    name: String,
    customer_id: String,
    profile_picture: String,
    cover_picture: String,
    phone_number: String,
    email_id: String,
    location: String,
    rating: String,
    about: String,
    open: Boolean,
    currently_available: [
      {
        dish_name: String,
        preorder_id: String,
        img_link: String,
        cost: String,
        veg: Boolean,
        availability: Boolean,
        stock: String,
        serves: String,
        tags: [String],
      },
    ],
    pre_order: [
      {
        dish_name: String,
        preorder_id: String,
        img_link: String,
        cost: String,
        veg: Boolean,
        availability: Boolean,
        time_to_cook: String,
        limit: String,
        serves: String,
        tags: [String],
      },
    ],
    orders: [
      {
        order: [
          {
            dish_name: String,
            dish_quantity: String,
          },
          {
            dish_name: String,
            dish_quantity: String,
          },
        ],
        cost: String,
        time_stamp: String,
        customer_id: String,
        customer_name: String,
        delivery_guy_id: String,
        delivery_guy_name: String,
      },
    ],
    reviews: [
      {
        order_id: String,
        customer_id: String,
        customer_name: String,
        rating: String,
        comment: String,
      },
    ],
    settelments: [
      {
        transaction_id: String,
        time_stamp: String,
        cost: String,
      },
    ],
    notifications: [
      {
        header: String,
        content: String,
        time_stamp: String,
        tags: [String],
      },
    ],
  },
  { collection: "seller" }
);
var Customers = mongoose.model("customerSchema", customerSchema);
var Sellers = mongoose.model("sellerSchema", sellerSchema);
module.exports = { Customers, Sellers };
