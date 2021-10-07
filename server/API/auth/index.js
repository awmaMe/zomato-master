// library
import express from "express";

// models
import { UserModel } from "../../database/user";

const Router = express.Router();

/*
route               /signup
description         signup with email and password
access              public
parameter           none
methods             POST
*/
Router.post("/signup", async (req, res) => {
  try {
    await UserModel.findByEmailAndPhone(req.body.credentials);
    const newUser = await UserModel.create(req.body.credentials);
    const token = newUser.generateJwtToken();

    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
