const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
  {
    id: 1,
    username: "Ayush",
    comment: "Hey, cover the face n fuck the ____",
  },
  {
    id: 2,
    username: "Akash",
    comment: "Hey, cover the mouth n fuck the ____",
  },
  {
    id: 3,
    username: "Amit",
    comment: "Hey, cover the upper n fuck the ____",
  },
  {
    id: 4,
    username: "Jatin",
    comment: "Hey, cover the muh n fuck the ____",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});
app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});
app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.redirect("/comments");
});
app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.get("/tacos", (req, res) => {
  res.send("Get/res response");
});

app.post("/tacos", (req, res) => {
  console.log(req.body);
  res.send("Post/res response");
});

app.listen(3000, () => {
  console.log("Server listening on 3000");
});

//representation of state transfer - rest

//get - list all comment
//get/:id- create one  comment
// post /:id- get one comment (using id)
// patch /:id- update
//delete /:id- for delete
