import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => res.send("Hello from Home! - response");

const handleProfile = (req, res) => res.send("HEllo from profile 23");

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.use("/user", userRouter);
export default app;
