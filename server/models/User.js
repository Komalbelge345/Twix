const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  followers: {
    type: [Object],
    default: []
  },
  followings: {
    type: [Object],
    default: []
  },
  dob: {
    type: Date,
    required: true
  },
  joinedDate: {
    type: Date,
    default: Date.now
  },
  state: {
    type: String,
    default: "state"
  },
  city: {
    type: String,
    default: "city"
  }
});

module.exports = mongoose.model("User", userSchema);
