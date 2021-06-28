const time = new Date();
const heure = time.getHours();
const day = time.getDay();

const logger = (req,res,next) =>{
    if(heure < 9 || heure > 14|| day < 1 || day > 5){
        res.send(' <h1>Sorry try in working hours </h1> ')
    }
    else{
         res.send("page have been send to the client")
        next();
    }
    }


    module.exports = logger
