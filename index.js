const express = require("express");
const cors = require('cors');
// const bodyParser = require('body-parser');
const userRouter = require("./routes/user.routes");
const gamerRouter = require("./routes/gamer.routes");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());
// app.use(bodyParser.json());
app.use("/api", userRouter);
app.use("/api", gamerRouter);

app.listen(PORT, () => console.log(`${PORT}`));
