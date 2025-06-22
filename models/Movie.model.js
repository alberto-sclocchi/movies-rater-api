const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    movieId:{
      type: String,
      
    },
    title: {
      type: String
    },
    releaseYear: {
      type: Number
    },
    overview: {
      type: String
    },
    verticalPoster:{
      type: String
    },
    rating:{
      type: Number,
        default: 0,
    },
    cast:[{
      type: String
    }],
    directors:[{
      type: String
    }],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Movie = model("Movie", movieSchema);

module.exports = Movie;