import "./App.css";
import Canvas from "./Canvas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="canvas-container">
          <Canvas />
        </div>
        <div className="container">
          <h1>Coming Soon</h1>
          <h3>Get ready to escape</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
