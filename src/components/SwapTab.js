import "./SwapTab.css";
import { MyContext } from "../context";
import { useContext } from "react";

const SwapTab = () => {
  const context = useContext(MyContext);
  return (
    <div className="swaptab">
      <div className="swap__container">
        <div
          onClick={() => context.switchTab(true, false)}
          id="projects"
          className="active"
        >
          Projects
        </div>
        <div onClick={() => context.switchTab(false, true)} id="skills">
          Skills
        </div>
      </div>
    </div>
  );
};

export default SwapTab;
