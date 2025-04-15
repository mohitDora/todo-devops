const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");
const authMiddleware = require("../middleware/authMiddleware");

router.use(authMiddleware);

// Create a todo
router.post("/", async (req, res) => {
  try {
    const todo = new Todo({ ...req.body, userId: req.user.userId });
    const saved = await todo.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user.userId });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a todo
router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    todo.completed = !todo.completed;
    await todo.save();

    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a todo
router.delete("/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
