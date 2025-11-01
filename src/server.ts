import "source-map-support/register";
import express from "express";
import path from "path";
import { taskRouter } from "./routes/tasks";
import cors from "cors";
import morgan from "morgan";
import errorHandler from "./middleware/errorHandler";

const app = express();

app.use(cors());
app.use(morgan("tiny"));

app.use(express.json());
// extended `true` allows rich objects and arrays to be encoded.
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.render("index", { text1: "Hello from EJS!" });
});

app.use("/tasks", taskRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log(`Express is running on 3000`);
});
