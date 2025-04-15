import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center mt-4">
      <Input
        placeholder="Enter a todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </form>
  );
}
