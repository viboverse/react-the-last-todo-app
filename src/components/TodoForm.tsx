export default function TodoForm() {
  return (
    <form className="border-malachite-400 w-120 rounded-md border px-16 py-12">
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
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="priority" className="block">
            Priority
          </label>
          <select id="priority" className="rounded-md border p-2 px-4">
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
    </form>
  );
}
