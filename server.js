const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require('cors')
const path = require("path");
require("dotenv").config();

const customers = require("./routes/customers");
const catalog = require("./routes/catalog");
const products = require("./routes/products");
const colors = require("./routes/colors");
const sizes = require("./routes/sizes");
const filters = require("./routes/filters");
const subscribers = require("./routes/subscribers");
const cart = require("./routes/cart");
const orders = require("./routes/orders");
const links = require("./routes/links");
const pages = require("./routes/pages");
const slides = require("./routes/slides");
const wishlist = require("./routes/wishlist");
const comments = require("./routes/comments");
// const mainRoute = require("./routes/index");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors('*'));

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/customers", customers);
app.use("/catalog", catalog);
app.use("/products", products);
app.use("/colors", colors);
app.use("/sizes", sizes);
app.use("/filters", filters);
app.use("/subscribers", subscribers);
app.use("/cart", cart);
app.use("/orders", orders);
app.use("/links", links);
app.use("/pages", pages);
app.use("/slides", slides);
app.use("/wishlist", wishlist);
app.use("/comments", comments);
// app.use("/", mainRoute);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  //app.use(express.static("client/build")) временно замерен на public;
  app.use(express.static("client/public"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
