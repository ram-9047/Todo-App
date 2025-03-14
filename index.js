import express from "express";
const app = express();

import { createTodo, updateTodo } from "./types.js";

app.use(express.json());

app.post("/todo", (res, res) => {});

app.get("/todos", (req, res) => {});

app.put("/completed", (res, res) => {});
