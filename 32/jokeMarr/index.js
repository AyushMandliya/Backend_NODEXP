const tana = require("give-me-a-joke");
const rang = require("colors");
tana.getRandomDadJoke(function (joke) {
  console.log(joke.rainbow);
});
