import { useEffect, useState } from "react";
import { getTodos, createTodo, deleteTodo, toggleTodo } from "../lib/api";
import TodoForm from "@/components/shared/TodoForm";
import TodoList from "@/components/shared/TodoList";
import { Navbar } from "@/components/shared/Navbar";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  const handleAdd = async (text) => {
    await createTodo(text);
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  const handleToggle = async (id) => {
    await toggleTodo(id);
    loadTodos();
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto p-4">
        <TodoForm onAdd={handleAdd} />
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}
