// import express from "express";
// import { Student } from "../models/student";
// import { getClient } from "../db";
// import { ObjectId } from "mongodb";

// const studentRoutes = express.Router();

// studentRoutes.get("/students", async (req, res) => {
//   console.log("inside GET");
//   try {
//     const client = await getClient();
//     const results = await client
//       .db()
//       .collection<Student>("students")
//       .find()
//       .toArray();

//     res.json(results);
//   } catch (err) {
//     console.error("ERROR", err);
//     res.status(500).json({message: "Internal server error"});
//   }
// });

// studentRoutes.get('/students/:id', async (req, res) => {

//     const id = req.params.id;
//     try {
//         const client = await getClient();
//         const results = await client
//           .db()
//           .collection<Student>("students")
//           .findOne({ _id: new ObjectId(id)});
    
//         res.json(results);
//       } catch (err) {
//         console.error("ERROR", err);
//         res.status(500).json({message: "Internal server error"});
//       }
// });

// studentRoutes.post("/students", async (req, res) => {
//     const student = req.body as Student;

//     const client = await getClient();
//         const result = await client
//           .db()
//           .collection<Student>("students")
//           .insertOne(student);
//           res.status(201).json({... student, _id : result.insertedId});

// });

// export default studentRoutes;
