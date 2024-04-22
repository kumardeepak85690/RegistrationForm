const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcryptjs = require("bcryptjs");
const { fileURLToPath } = require("url");
const path = require("path");


const filename = __filename;
const dirname = __dirname;

const PORT = 5000;
const app = express();
const MONGB_UR = "mongodb+srv://dk705437:job123@cluster0.clmzl6d.mongodb.net/";

// mdillrwre
app.use(cors());
app.use(express.json());

//use the client app
app.use(express.static(path.join(__dirname, "/client/dist")));

//render client app
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/dist/index.html"))
);

// mdillrwre
app.use(cors());
app.use(express.json());
mongoose.connect(MONGB_UR);
const db = mongoose.connection;
db.on("error", (err) => {
  console.error("Mongodb connnection error", err);
});
db.once("open", () => {
  console.log("Mongodb is connected");
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = mongoose.model("User", userSchema);
app.post("/register", async (req, res) => {
  try {
    const hasspassword = await bcryptjs.hashSync(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hasspassword,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error druing registration ", error);
    res.status(500).json({ error: "inter server error" });
  }
});
app.listen(PORT);
