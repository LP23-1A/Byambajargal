import express from "express";
import bp from "body-parser";
import mongoose from "mongoose";
import Url from "./schema/url.js";
const PORT = 8000;
const MONGODB_URL =
  "mongodb+srv://admin:admin123@url-shortener.zr3sxmw.mongodb.net/?retryWrites=true&w=majority";
const app = express();

app.use(bp.json());

// const users =[
//     {
//         id:1,
//         name:'orgil',
//     },
//     {
//         id:2,
//         name:'naki'
//     },
//     {
//         id:3,
//         name:'munkh'
//     }
// ]

app.get("/", async (req, res) => {
  const response = await Url.find();
  res.send({ success: true, response }).end();
});

// app.get('/:id' , (req , res) =>{
// const id = req.params.id;

// const filteredData = users.filter((user) => user.id === parseInt(id));

// res.send({success:true, users:filteredData}).end();
// })

app.post("/", async (req, res) => {
  const newUrl = await Url.create(req.body);

  res.send({ success: true, urls: newUrl }).end();
});

// app.put ('/:id' , (req, res) => {
//     const id = req.params.id;

//     users.map((user) =>{
//         if(user.id === parseInt(id)){
//             user.name = req.body.name;
//         }
//     });

//     res.send({success:true, users:users}).end();
// });
// app.delete('/:id' , (req, res) => {
// const id = req.params.id;

// const deletedUserId = users.findIndex((user) => user.id === parseInt(id));

// if(deletedUserId !== -1){
//     users.splice(deletedUserId , 1)
// }

// res.send({success:true, users:users}).end();
// })

app.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("db connection success");
  } catch (error) {
    console.log(error);
  }
  console.log("Server running");
});
