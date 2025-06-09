const path = require("path");
const express = require("express");
const userRouter = express.Router();
const rootDir = require("../utils/pathUtils.js");

userRouter.get("/",(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","homePage.html"));
});

module.exports = userRouter;