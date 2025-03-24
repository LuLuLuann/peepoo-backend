import express from "express";
import morgan from "morgan"; // logger
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

// Routers
import {healthRouter} from "./routes/health.js";

dotenv.config();
// console.log(process.env.MONGODB_URI);

//connect to MongoDB
await mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MONGODB"))
.catch((e) => console.error(e))

const PORT = process.env.PORT || 4000;

const app = express();

// view engine
app.set("views", "./views");
app.set("view engine", "pug"); // choose engine here

// middleware - functions executed between the __ and __ 
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"))
app.use(helmet());
app.use(cors());

//Routes ----> url
// you can only send 1 response
app.get("/", (req, res) => {
// res.send("ok")
// res.json({"data": "hello"})
res.render("index")
})

// API routes
app.use("/api/health", healthRouter)

//ADD global error request handler -- always has 4 parameters
// underscore before the wordreq is showing that we're not using that. you can keep it or leave it out
app.use((err, _req, res, next) => {
    console.error(err);
    res.status(500).send("Seems like we messed up somewhere...");
  });

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
