const express = require('express');
const fs = require('fs');
const path = require("path");
const app = express();
const logger = require('./testM')



// //create middleware
// const time = new Date();
// const heure = time.getHours();
// const day = time.getDay();

// app.use( logger = (req,res,next) =>{
//     if(heure < 9 || heure > 14|| day < 1 || day > 5){
//         res.send(' <h1>Sorry try in working hours </h1> ')
//     }
//     else{
//         // res.send("page have been send to the client")
//         next();
//     }
//     })
    //home
    
    // app.get('/home',logger, (req,res) =>{
    //     fs.readFile('./public/home/Home.html','utf-8',(err,data)=>{
    //         err ? console.error(err) : res.send(data);
    // });
    // });
    // app.use(express.static(path.join(__dirname, "public/home")));

    //service
    app.get('/service',logger, (req,res) =>{
        fs.readFile('./public/service/Our Service.html','utf-8',(err,data)=>{
            err ? console.error(err) : res.send(data);
    });
    });
    app.use(express.static(path.join(__dirname, "public/service")));
    
    //contact
    app.get('/contact',logger, (req,res) =>{
    fs.readFile('./public/contact.html','utf-8',(err,data)=>{
        err ? console.error(err) : res.send(data);
    });
    });
    app.use(express.static(path.join(__dirname, "public/contact")));



const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => err ? console.error(err) : console.log(`server is runnig on port ${PORT}`));

