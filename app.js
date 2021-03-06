const express = require("express");
const ejs = require("ejs");


const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"))
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render('index.ejs')
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
});
