const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    movieId:{
      type: Number,
      
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
        type: Number
    },
    cast:[{
        type: String
    }]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Movie = model("Movie", movieSchema);

module.exports = Movie;