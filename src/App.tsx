import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <main className="text-malachite-400 font-vt323 min-h-screen bg-gray-950">
      <div className="flex min-h-screen items-center justify-between gap-12 px-8">
        {/* Left Side */}
        <div className="flex flex-1 items-center justify-center">
          <TodoForm />
        </div>

        {/* Diving line */}
        <div className="border-malachite-400 mx-4 h-[75vh] border-l"></div>

        {/* Right Side */}
        <div className="flex-1">
          <ul>
            <TodoItem title="Going to gym" priority="high" />
            <TodoItem title="LOREM IPSUM THIS IS TESS" priority="medium" />
            <TodoItem
              title="LOREM IPSUM THIS IS TESSLOREM IPSUM THIS IS TESS"
              priority="low"
            />
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
