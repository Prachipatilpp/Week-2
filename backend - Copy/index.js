// rpm init package.json This is a rode project.

// три 1 express expressJs package Install hogya. project came to know that we are using express

// We finally use express

const express = require("express");
const mongoose = require("mongoose");
const JwtStrategy = require("passport-jwt").Strategy,
ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const authRoutes = require("./routes/auth");
const User = require("./models/user");
const app =  express();
const port =  8000;
app.use(express.json());

//connect mongodb to our node app
//mongoose.connect()take 2 argumment: 1.which db to cnnect to(db url) 2.connection .options
 
mongoose.connect("mongodb+srv://prachipatil5415:Prachi@cluster0.yj9rc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

        
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Error while connecting to Mongo", err));

// setup passport-jwt
let opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisKeyIsSupposedToBeSecret";
passport.use(
   new JwtStrategy(opts,  (jwt_payload, done) => {
      User.findOne({id: jwt_payload.sub},  (err, user) => {
         if (err) {
            return done(err, false);

          }
        if (user) {
            return done(null, user);
        }
         else {
        return done(null, false);
// or you could create a new account
         }
        

   });

    })

);


        

//API GET type: /: return text "Hello world

app.get("/", (req, res) => {

// red contains all data for the request

// res contains all Xsta for the response



res.send("Hello World");

});
app.use("/auth",authRoutes);

// Now we want to tell express that our server will run on localhost:8000

app.listen(port, () => {

console.log("App is running on port " + port);
});