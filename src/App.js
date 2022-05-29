import { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SwapTab from "./components/SwapTab";
import { MyContext } from "./context";

function App() {
  const context = useContext(MyContext);
  return (
    <div className="App">
      <Header />
      <SwapTab />
      {context.state.projects && <Projects />}
      {context.state.skills && <Skills />}
    </div>
  );
}

export default App;
