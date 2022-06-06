const express = require("express");
const mongoose = require("mongoose");
const Router  = require("./routes");

const app = express();

app.use(express.json());
/*
mongoose.connect('mongodb://localhost:27017/Planit',{
    userNewUrlParser:true,
    useFindAndModif: false,
    useUnifiedTopology: true
});*/

const username = "admin";
const password = "planit175";
const cluster = "cluster0.orc7t";
const dbname = "Planit";
mongoose.connect( `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,{
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function (){
    console.log("MongoDB connected successfully");
});

app.use(Router);

app.listen(3000, () => {
    console.log("Server is running at port 3000")
})