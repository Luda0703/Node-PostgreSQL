const express = require("express");
const cors = require('cors');

const userRouter = require("./routes/user.routes");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", userRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

app.listen(PORT, () => console.log(`${PORT}`));
