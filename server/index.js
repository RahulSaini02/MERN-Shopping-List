import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config/index.js";

// Constants
const { mongoURI } = config;

// Routers
import itemRouter from "./routes/items.js";
import userRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";

// Config
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Routes
app.use("/items", itemRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);

// Server Port
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Shopping list Api");
});

// DB Cnnection
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`))
  )
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
