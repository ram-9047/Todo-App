import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
import { createTodo, updateTodo } from "./types.js";
import { todo } from "./db.js";

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/todo", async (req, res) => {
  const body = req.body;
  const parsedPayload = createTodo.safeParse(body);
  if (!parsedPayload.success) {
    res.statusCode(411).json({ message: "You send the wrong inputs" });
    return;
  }

  await todo.create({
    title: req.body.title,
    description: req.body.description,
  });

  res.statusCode(200).json({ message: "todo created" });
});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {
  const body = req.body;
  const parsedPayload = updateTodo.safeParse(body);

  if (!parsedPayload.success) {
    res.statusCode(411).json({ message: "Invalid Inputs" });
    return;
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
    return;
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});
