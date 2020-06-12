const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require("dotenv")

//import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts')
dotenv.config();

//connect to db
mongoose.connect(process.env.DB_CONNECT, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
.then(console.log("mongodb connected successfully...."))
.catch(err =>console.log(err));

//middleware
app.use(express.json());

//route middlewares
app.use('/api/user',authRoute);
app.use('/api/posts',postRoute);

app.listen(3000,()=> {
    console.log('server is listening on port 3000');
})