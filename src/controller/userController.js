const express = require("express");
const connectDb = require("../config/db");
const router = express.Router();

router.post("", async (req, res) => {
    // console.log(req.body.name,"name");
    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
    const country = req.body.country;
    const number = req.body.number;
    const gender = req.body.gender;
    connectDb.query(
        "INSERT INTO users (name,email,age,country,number,gender) VALUE(?,?,?,?,?,?)",
        [name, email,age, country, number,gender],
        (err, result) => {
            if (err) throw err;
            res.status(201).send("Value insert");
        }
    )
});
router.get("", async (req, res) => {
    connectDb.query(
        "SELECT * FROM users ",
        (err, result) => {
            if (err) throw err;
            res.send(result);
        }
    )

});

router.delete("", async (req, res) => {
    
    connectDb.query(
        "DELETE FROM users ",
       
        (err, result) => {
            if (err) throw err;
            res.send(result);
        }
    )

});


module.exports = router;