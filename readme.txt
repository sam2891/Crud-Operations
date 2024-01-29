CRUD :
1. Creating Two Folders=>
a =>Backend(npm):
===> CHANGE THE SCRIPT IN "PACKAGE.JSON" TO {nodemon Server.js}
(i.e) :

  (// "scripts": {
          "dev": "nodemon Server.js",
          "start": "node Server.js"}
    )

 => Server.js(Mongoose) :
 >>Need to install cors , express ,nodemon ,mongoose 
(i.e) :

 {//const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const app = express();
const PORT = process.env.PORT | 5000 //}

 >>Define everything inside "Server.js"
 >>Create A PORT where our page should Run ...
 >> Start the Server..... (npm run dev)
b=>frontend(react.js)
>> create folders ☑️controllers ==> Taskcontrollers.js
                  ☑️models ==> TaskModel.js
                  ☑️Routes ==> FirstRoute.js
                              &
                          ☑️ .env {File}
>>And Create ==>getTasks  
             ==>SaveTasks  
             ==>UpdateTasks   
             ==>deleteTasks 
>>Add to Router :     
(i.e) =>
  //
{router.get("/get", getTasks);
router.post("/save", saveTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);}       



