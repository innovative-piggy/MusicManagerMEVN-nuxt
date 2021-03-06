const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config/db");

const app = express();
const PORT = process.env.PORT || 4000;

mongoose.set("useCreateIndex", true);
mongoose
  .connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log({ database_error: err });
  });

app.use(cors());

//configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//configure body-parser ends here
app.use(morgan("dev")); // configire morgan

app.use('/uploads', express.static('uploads'));

// define first route
app.get("/", (req, res) => {
  res.json("Hola MEVN devs...Assemble");
});

const musicRoutes = require("./api/routes/music"); //bring in our user routes
app.use("/music", musicRoutes)


app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
