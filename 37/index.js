const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/movieApp")
  .then(() => {
    console.log("Connection open !!! ");
  })
  .catch((err) => {
    console.log("Error Occurred");
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);
// const lagaan = new Movie({ title: "Lagaan",year: 2001,score: 9.2,rating: "A",});

// const blah = new Movie();
// blah.save();

Movie.insertMany([
  { title: "Lagaan", year: 2001, score: 9.2, rating: "A" },
  { title: "Kesari", year: 2001, score: 9.2, rating: "A" },
  { title: "Hero", year: 2001, score: 9.2, rating: "A" },
  { title: "Don", year: 2001, score: 9.2, rating: "A" },
]).then((data) => {
  console.log("It Worked");
  console.log(data);
});
