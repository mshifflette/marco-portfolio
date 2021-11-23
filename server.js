const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());

app.use(express.static("/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });