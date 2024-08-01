const express = require("express");
const { connectMongodb } = require("./connection");
const { logReqRes } = require("./middleWare/index");
const userRouter = require("./routes/user");
const app = express();
const PORT = 3000;
connectMongodb("mongodb://localhost:27017/youtubeApp")
  .then(() => {
    console.log("DB connection succeffully");
  })
  .catch((e) => {
    console.log("ERROR IN DB CONNECTION ", e);
  });

app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

app.use("/api/users", userRouter);
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
