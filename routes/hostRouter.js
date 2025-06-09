const path = require("path");

const express = require("express");
const rootDir = require("./utils/pathUtils.js");
const hostRouter = express.Router();

hostRouter.get("/contact-us",(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","contactUsForm.html"));
});

hostRouter.post("/contact-us",(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(rootDir,"views","ThankYou.html"));
})

module.exports = hostRouter;