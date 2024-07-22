express = require("express");
mongoose = require("mongoose");

app = express();


app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
  res.redirect("/home");
})

app.get("/home", (req, res)=>{
  res.render("Home", {
    title: "Home Page"
  })
})

app.get("/work-experience", (req, res)=>{
  res.render("Work", {
    title: "Work Experience"
  })
})

app.get("/projects", (req, res)=>{
  res.render("Projects", {
    title: "Projects"
  })
})

app.get("/education", (req, res)=>{
  res.render("Education", {
    title: "Education"
  })
})

app.get("*", (req, res)=>{
  res.render("Error", {
    title: "Sorry! Error..."
  })
})

app.listen(3000, ()=>{
  console.log("Listening on port 3000");
})
