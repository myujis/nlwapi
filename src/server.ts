import 'reflect-metadata';
import express from 'express';
import './database';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);


app.get("/", (request, response) => {
    return response.json({ message: "It works!!" });
})

app.listen(8000, () => console.log("[SERVER] Connected to 8000"));