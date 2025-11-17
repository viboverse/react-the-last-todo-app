import { MdDelete } from "react-icons/md";
import type { Todo } from "../types/todoItem";

const priorityColors = {
  low: "text-green-400 border-green-400",
  medium: "text-yellow-400 border-yellow-400",
  high: "text-red-400 border-red-400",
};

type TodoItemProps = Todo & {
  onDelete: (id: number) => void;
};

export default function TodoItem({
  title,
  id,
  priority,
  onDelete,
}: TodoItemProps) {
  return (
    <li className="border-malachite-400 flex flex-wrap items-center justify-between gap-x-2 gap-y-2 border-b px-2 py-2 text-base md:gap-x-4 md:px-4 md:text-lg">
      <span className="wrap-break-words flex-1">{title}</span>
      <span
        className={`ml-2 shrink-0 rounded-full border px-2 py-1 text-xs md:ml-4 md:px-3 ${priorityColors[priority]}`}
      >
        {priority}
      </span>
      <div className="flex shrink-0 gap-2 md:gap-4">
        <MdDelete
          className="size-5 hover:cursor-pointer md:size-6"
          onClick={() => onDelete(id)}
        />
      </div>
    </li>
  );
}
