const express = require("express");
const userRouter = require("./routes/user.routes");
const gamerRouter = require("./routes/gamer.Controller");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use("/api", userRouter);
app.use("/api", gamerRouter);

app.listen(PORT, () => console.log(`${PORT}`));
