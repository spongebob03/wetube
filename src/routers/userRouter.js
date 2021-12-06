import express from "express";

const userRouter = express.Router();

const handleUser = (req, res) => {
    res.send("User");
};

userRouter.get("/users", handleUser);

export default userRouter;