const express = require("express")
const mongoose = require('mongoose')
const config= require('config')
const passport = require("passport");
const app = express()



// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
// passport
app.use(passport.initialize());
require("./middleware/passport")(passport);

// connect db
require("./config/db")()
//routesApi
app.use('/info',require('./routes/info'))
app.use("/user", require("./routes/users"));


//run server
const port = process.env.PORT || 5000

app.listen(port, err => {
    if (err) 
        console.log("cannot connect to database")
    console.log(`server is running on port ${port}`)
})
