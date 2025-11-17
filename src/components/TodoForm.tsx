import { useState } from "react";
import type { Priority, Todo } from "../types/todoItem";

export default function TodoForm({
  onAddTodo,
}: {
  onAddTodo: (todo: Todo) => void;
}) {
  const [enteredTask, setEnteredTask] = useState<string>("");
  const [selectedPriority, setSelectedPriority] = useState<Priority>("low");

  function handleTaskInput(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredTask(event.target.value);
  }

  function handleSelectedPriority(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedPriority(event.target.value as Priority);
  }

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    if (enteredTask.trim().length === 0 || !selectedPriority) {
      console.log("Fill All Inputs");
      return;
    }

    const todoWithId = {
      id: Date.now(),
      title: enteredTask,
      priority: selectedPriority,
    };

    onAddTodo(todoWithId);

    setSelectedPriority("low");
    setEnteredTask("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-malachite-400 w-120 rounded-md border px-16 py-12"
    >
      <div className="flex flex-col items-start justify-center gap-12">
        <div className="space-y-2">
          <label htmlFor="task" className="block">
            Task
          </label>
          <input
            type="text"
            id="task"
            placeholder="Enter the task..."
            className="w-full rounded-md border p-2"
            onChange={handleTaskInput}
            value={enteredTask}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="priority" className="block">
            Priority
          </label>
          <select
            id="priority"
            className="rounded-md border p-2 px-4"
            onChange={handleSelectedPriority}
            value={selectedPriority}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button className="border-malachite-400 mx-auto flex rounded-md border px-8 py-2">
          Submit
        </button>
      </div>
    </form>
  );
}
