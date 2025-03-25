import express from "express";
import morgan from "morgan"; // logger
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

// Routers
import bathroomRouter from "./routes/bathroom.js";
import userRouter from "./routes/user.js";
import locationRouter from "./routes/location.js";
import authRouter from "./routes/auth.js"

// API Router
import nycOpenDataPublicBathroomApiRouter from "./routes/nycOpenDataPublicBathroomApi.js"

dotenv.config();
// console.log(process.env.MONGODB_URI);

//connect to MongoDB
await mongoose
.connect(process.env.MONGODB_URI, { autoIndex: false })  // what is autoIndex? an index that is automatically created when a field is marked as unique
.then(() => console.log("Connected to MONGODB"))
.catch((e) => console.error(e))

const PORT = process.env.PORT || 4000;

const app = express();

// view engine
app.set("views", "./views");
app.set("view engine", "pug"); // choose engine here

// middleware - functions executed between the request and the response 
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"))
app.use(helmet());
app.use(cors());

//Routes ----> url
// you can only send 1 response
app.get("/", (req, res) => {
res.render("index")
})

// API routes
app.use("/api/bathroom", bathroomRouter)
app.use("/api/user", userRouter)
app.use("/api/location", locationRouter)
app.use("/api/auth", authRouter)

app.use('/api/nycOpenDataPublicBathroomApi', nycOpenDataPublicBathroomApiRouter); //api route for NYC Open Data Public Bathroomapi

//ADD global error request handler -- always has 4 parameters
// underscore before the wordreq is showing that we're not using that. you can keep it or leave it out
// Global error handling
app.use((err, _req, res, next) => {
    console.error(err);
    res.status(500).send("Seems like we messed up somewhere...");
  });

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
