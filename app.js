const express = require('express');
const axios = require('axios');
const port = 3000;
const rocketsRoute = require("./src/routes/rocketsRoute");

const app = express();
app.use(express.json());

// app.get('/' , (req , res) =>{
//     axios.get("https://api.spacexdata.com/v3/rockets")
//         .then((responce) =>{
//             const data = responce.data ; 
//             res.json(data[0]);
//         })
//         .catch((error)=>{
//             console.log(error.message);
//             res.json({msg : error.message});
//         })
// })

app.use('/rockets' , rocketsRoute);

app.listen(port , ()=>{
    console.log(`Server is connetcted to port : ${port}`);
})