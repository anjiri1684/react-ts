import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [
    new Todo("Learn React"),
    new Todo("Learn Redux"),
    new Todo("Learn Node.js"),
  ];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
