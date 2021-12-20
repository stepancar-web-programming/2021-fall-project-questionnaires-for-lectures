module.exports = app => {
    const types = require("../controllers/type.controller.js");
  
    var router = require("express").Router();
  
    router.get("/types/:id", types.findById);
    
    app.use("/api", router);
  }