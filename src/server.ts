import 'reflect-metadata';
import express from 'express';
import './database';

const app = express();


app.get("/", (request, response) => {
    return response.json({ message: "It works!!" });
})

app.listen(8000, () => console.log("[SERVER] Connected to 8000"));