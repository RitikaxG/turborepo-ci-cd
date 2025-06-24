import { client } from "@repo/db/client";
import express from "express";

const app = express();
app.use(express.json());

app.post("/signup",async(req, res) => {
    const { username , password } = req.body;
    const newUser = await client.user.create({
        data : {
            username : username,
            password : password
        }
    })

    res.json({
        message : "Signup successful",
        id : newUser.id
    })
})

app.listen(3002);