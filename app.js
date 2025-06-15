const express = require("express");
const app = express();
const usersRouter = require("./routes/usersRouter");
const searchRouter = require("./routes/searchRouter");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/search", searchRouter);
app.use("/", usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
