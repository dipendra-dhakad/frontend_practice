//step1: create a folder
//step2: move into that folder
//step3: npm init -y
//step4: open a folder using vscode
//step5:  npm i express
//step6: create a server.js


const express = require ('express');
 const app = express();

 app.listen(3000, ()=>{
     console.log("Server Started at port no. 3000");
     
 })