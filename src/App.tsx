import "./App.css";
import { Button } from "./components/atoms";
import { AuthTemplate } from "./components/templates/auth-template/auth-template.template";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Atomic Design with Vite + React + TS
      </h1>
      <Button label="Click Me" onClick={() => alert("Clicked!")} />
      <AuthTemplate />
    </div>
  );
}

export default App;
