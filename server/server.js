const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static("public"))

mongoose.connect("mongodb://localhost:27017/userDB",  { useNewUrlParser: true, useUnifiedTopology: true })

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
})

const User = mongoose.model("User", userSchema)

app.get("/", function(req, res){
  res.send("Hello");
});

app.listen(4000, function(){
  console.log("Server started on port 4000.");
});
