import express from "express";
import bp from "body-parser";
import mongoose from "mongoose";
import Url from "./schema/Url.js";
import { nanoid } from "nanoid";
import dotenv from "dotenv";

dotenv.config();

const PORT = 8000;
const MONGODB_URL = process.env.MONGODB_URL;

console.log(MONGODB_URL);

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

app.get("/", async (_, res) => {
  const response = await Url.find();
  res.send(response).end();
});

app.get("/:url", async (req, res) => {
  const { url } = req.params;
  const short = await Url.findOne({
    shortUrl: url,
  });
  res.redirect(short.orgUrl);
});

app.post("/", async (req, res) => {
  const { url } = req.body;
  const newUrl = await Url.create({
    orgUrl: url,
    shortUrl: nanoid(10),
  });

  res.send({ success: true, url: newUrl }).end();
});

app.delete("/:url", async (req, res) => {
  const { url } = req.params;

  const { acknowledged, deletedCount } = await Url.deleteOne({
    shortUrl: url,
  });
  res.send({ success: acknowledged, removedCount: deletedCount }).end();
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
