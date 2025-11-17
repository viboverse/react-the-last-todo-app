import "./App.css";
import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import type { Todo } from "./types/todoItem";
import Login from "./components/login";

function App() {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  function handleAddTodo(todo: Todo) {
    setTodo((prevTodos) => [...prevTodos, todo]);
  }

  function handleDeleteItem(id: number) {
    setTodo((todos) => todos.filter((todo) => todo.id !== id));
  }

  let content;

  if (todo.length === 0) {
    content = (
      <p className="text-center text-2xl font-bold">There is no tasks yet!</p>
    );
  } else {
    content = (
      <ul>
        {todo.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            priority={item.priority}
            id={item.id}
            onDelete={handleDeleteItem}
          />
        ))}
      </ul>
    );
  }

  useEffect(() => {
    const isLoggedIn = window.localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <main className="text-malachite-400 font-vt323 flex min-h-screen flex-col items-center justify-center bg-gray-950">
      {!isLoggedIn ? (
        <Login onSetLoggedIn={setIsLoggedIn} />
      ) : (
        <div className="flex min-h-screen gap-8 px-4 md:flex-row md:items-center md:gap-12 md:px-28">
          {/* Left Side */}
          <div className="flex w-full max-w-md flex-1 items-center justify-center">
            <TodoForm onAddTodo={handleAddTodo} />
          </div>

          {/* Dividing line */}
          <div className="border-malachite-400 mx-4 hidden h-[75vh] border-l md:block"></div>

          {/* Right Side */}
          <div className="mt-8 w-full max-w-xl flex-1">{content}</div>
        </div>
      )}
    </main>
  );
}

export default App;
