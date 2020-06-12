const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    token: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
    banned: {
      type: Boolean,
    },
    deactivated: {
      type: Boolean,
    },
    deleted: {
      type: Boolean,
    },
    lastLogin: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
