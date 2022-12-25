const app = require("./index");
const connectDb = require("./config/db");
// const dotenv = require("dotenv").config();
const port = process.env.PORT || 6000;
connectDb.connect((err) => {
    if (err) {
        console.log(err.message)
    };
    console.log("db", connectDb.state);
});

app.listen(port, () => console.log(`App is running port : ${port}`));