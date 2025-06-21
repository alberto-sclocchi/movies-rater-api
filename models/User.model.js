const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    name: {
      type: String,
    },
    username: {
      type: String,
    },
    moviesAdded: {
      type: Schema.Types.ObjectId,
      ref: "Movie"
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
