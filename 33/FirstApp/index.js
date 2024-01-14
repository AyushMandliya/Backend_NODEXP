const express = require("express");
const app = express();

// console.dir(app);

// app.use((req, res) => {
//   console.log("We get a new request");
//   //   console.dir(req);
//   res.send(" <h1>This is my webpage</h1> ");
// });

app.get("/", (req, res) => {
  console.log("Home Page");
  res.send("<h1>This is the home page</h1>");
});

app.post("/cats", (req, res) => {
  res.send("This is the post request send by Ayush Mandliya");
});

app.get("/cats", (req, res) => {
  console.log("cat request");
  res.send("Meoww");
});

app.get("/dogs", (req, res) => {
  console.log("Dog request");
  res.send("<h1>Barking</h1>");
});

app.get("/r/:subreddit", (req, res) => {
  console.log(req.params);
  res.send("Browing the subreddit");
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(
    `<h1>Viewing the post Id :  ${postId} on ${subreddit} subreddit </h1>`
  );
});

app.get("*", (req, res) => {
  res.send("I don't know the path that you mentioned");
});

app.listen(3000, () => {
  console.log("Listening on port 3000!!!!!!");
});
