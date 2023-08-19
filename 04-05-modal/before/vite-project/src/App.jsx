import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(false);
  return (
    <div
      onKeyDown={(e) => {
        if (e.key === "Escape") setState(false);
      }}
    >
      <h1>Modal</h1>
      <button onClick={() => setState(true)}>Open</button>
      <div
        className="modal"
        style={state ? { display: "block" } : { display: "none" }}
      >
        <h2>Modal title</h2>
        <p>Modal content here...</p>
        <button onClick={() => setState(false)}>Close</button>
      </div>
    </div>
  );
}

export default App;
