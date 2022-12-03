import express from "express";
import { Shoutout } from "../models/shoutOut";
import { getClient } from "../db";

const shoutOutRoutes = express.Router();

shoutOutRoutes.get("/shoutouts", async (req, res) => {
    console.log("inside GET");
    try {
      const client = await getClient();
      const results = await client
        .db()
        .collection<Shoutout>("shoutouts")
        .find()
        .toArray();
  
      res.json(results);
    } catch (err) {
      console.error("ERROR", err);
      res.status(500).json({message: "Internal server error"});
    }
  });

  shoutOutRoutes.post("/shoutouts", async (req, res) => {
    const shoutout = req.body as Shoutout;

    const client = await getClient();
        const result = await client
          .db()
          .collection<Shoutout>("shoutouts")
          .insertOne(shoutout);
          res.status(201).json({... shoutout, _id : result.insertedId});

});

export default shoutOutRoutes;