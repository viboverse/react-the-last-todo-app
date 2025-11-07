import { MdDelete, MdEdit } from "react-icons/md";

type TodoItmeProps = {
  title: string;
  priority: "low" | "medium" | "high";
};

const priorityColors = {
  low: "text-green-400 border-green-400",
  medium: "text-yellow-400 border-yellow-400",
  high: "text-red-400 border-red-400",
};

export default function TodoItem({ title, priority }: TodoItmeProps) {
  return (
    <li className="border-malachite-400 flex items-center justify-between gap-x-4 border-b px-4 py-2">
      <span className="flex-1">{title}</span>
      <span
        className={`ml-4 shrink-0 rounded-full border px-3 py-1 text-xs ${priorityColors[priority]}`}
      >
        {priority}
      </span>
      <div className="ml-12 flex gap-4">
        <MdEdit className="size-6 hover:cursor-pointer" />
        <MdDelete className="size-6 hover:cursor-pointer" />
      </div>
    </li>
  );
}
