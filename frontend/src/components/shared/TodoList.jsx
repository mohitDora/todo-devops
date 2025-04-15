import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Check, Trash, X } from "lucide-react";

export default function TodoList({ todos, onToggle, onDelete }) {
  return (
    <div className="mt-6 rounded-lg overflow-hidden border shadow-sm">
      <Table>
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="w-[60%] font-medium text-gray-600">
              Task
            </TableHead>
            <TableHead className="font-medium text-gray-600">Status</TableHead>
            <TableHead className="text-right font-medium text-gray-600">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos?.map((todo) => (
            <TableRow
              key={todo._id}
              className={
                todo.completed
                  ? "bg-green-50 hover:bg-green-100"
                  : "hover:bg-gray-50"
              }
            >
              <TableCell
                className={`font-medium ${
                  todo.completed
                    ? "text-gray-500 line-through"
                    : "text-gray-800"
                }`}
              >
                {todo.text}
              </TableCell>
              <TableCell>
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                    todo.completed
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {todo.completed ? "Completed" : "Pending"}
                </span>
              </TableCell>
              <TableCell className="text-right space-x-2">
                {todo.completed ? (
                  <Button
                    variant={todo.completed ? "secondary" : "outline"}
                    size="sm"
                    onClick={() => onToggle(todo._id)}
                    className="h-8 w-8 p-0"
                    aria-label="Toggle completion"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    variant={todo.completed ? "secondary" : "outline"}
                    size="sm"
                    onClick={() => onToggle(todo._id)}
                    className="h-8 w-8 p-0"
                    aria-label="Toggle completion"
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                )}
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => onDelete(todo._id)}
                  className="h-8 w-8 p-0"
                  aria-label="Delete task"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
          {todos?.length === 0 && (
            <TableRow>
              <TableCell colSpan={3} className="h-24 text-center text-gray-500">
                No tasks yet. Add one to get started!
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
