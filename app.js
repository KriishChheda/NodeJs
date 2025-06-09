const express = require("express");
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtils.js");
const path = require("path");
const app=express();
// this creates a node js application which by default is an object. This object provides a default request handler to handle the request and resonse.

app.use((req,res,next)=>{
    console.log("First dummy middleware, URL=",req.url,"Method=",req.method);
    next();  
});

app.use((req,res,next)=>{
    console.log("Second dummy middleware, URL=",req.url,"Method=",req.method);
    next();
});

// app.use((req,res,next)=>{
//     console.log("Third middleware")
//     res.send("<p>response sent</p>");
//     // By default it calls res.end() 
// })

// every request will pass through the two middlewares and will finally pass through this one where the url and method of the request will get logged
app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
});

// finally this middleware is where the the request body if it is encoded will get parsed
app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "views", "Error404.html"));
});

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
});

// app.listen() will create a http server, and start listening on PORT, It will also execute the call back function once it starts listening.