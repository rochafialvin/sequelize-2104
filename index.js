require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");

const userRouter = require("./routers/users");

app.use(cors());
app.use(express.json());

// calling home
app.get("/", (req, res) => {
  res.send("API JALAN MZ 🚀");
});

app.use("/users", userRouter);

// error handler
app.use((error, req, res, next) => {
  console.log({ error });

  const errorObj = {
    status: "Error",
    message: error.message,
    detail: error,
  };

  const httpCode = typeof error.code == "number" ? error.code : 500;
  res.status(httpCode).send(errorObj);
});

//  running api
app.listen(port, (error) => {
  if (error) return console.log({ err: error.message });
  console.log(`API berhasil running di port ${port}`);
});
