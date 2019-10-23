const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    itemNo: {
      type: String,
      required: true
    },
    enabled: {
      type: Boolean,
      required: true,
      default: true
    },
    name: {
      type: String,
      required: true
    },
    currentPrice: {
      type: Number,
      required: true
    },
    previousPrice: {
      type: Number
    },
    categories: {
      type: String,
      required: true
    },
    imageUrls: [
      {
        type: String,
        required: true
      }
    ],
    quantity: {
      type: Number,
      required: true,
      default: 0
    },
    color: {
      type: String
    },
    sizes: {
      type: String
    },
    productUrl: {
      type: String
    },
    brand: {
      type: String
    },
    manufacturer: {
      type: String
    },
    manufacturerCountry: {
      type: String
    },
    seller: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    },
    maxSpeed: {
      type: String,
      required: true
    },
    chargingTime: {
      type: String
    },
    motor: {
      type: String
    },
    battery: {
      type: String
    },
    distance: {
      type: String
    },
    description: {
      type: String,
      required: true
    },
    shortDescription: {
      type: String,
      required: true
    },
    linkItem: {
      type: String
    },
    rating: {
      type: String,
      required: true,
      default: 0
    }
  },
  { strict: false }
);

ProductSchema.index({ "$**": "text" });

module.exports = Product = mongoose.model("products", ProductSchema);
