// router is like a mini app
import { Router } from "express";

export const healthRouter = new Router();

// move to folder called "controllers" if you want to scale
healthRouter.get("/", (req, res) => {
    res.status(200).json({
        "status":"ok"
    })
});

// auth.js route (route to sign in a user)