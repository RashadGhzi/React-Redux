import "./App.css";
import Home from "./component/Home";
import { Counter } from "./features/counter/Counter";
function App() {
  return (
    <div className="body">
      <Counter />
      <Home />  
    </div>
  );
}

export default App;
