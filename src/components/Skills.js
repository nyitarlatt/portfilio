import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <h3>Languages and Libraries</h3>
      <div className="skills__container">
        <div className="left_col">
          <div className="skill">
            <i className="ri-checkbox-circle-line"></i>
            <div className="rr">
              <div className="skill_name">Html</div>
              <div className="level">intermediate</div>
            </div>
          </div>
          <div className="skill">
            <i className="ri-checkbox-circle-line"></i>
            <div className="rr">
              <div className="skill_name">Css</div>
              <div className="level">intermediate</div>
            </div>
          </div>
          <div className="skill">
            <i className="ri-checkbox-circle-line"></i>
            <div className="rr">
              <div className="skill_name">Javascript</div>
              <div className="level">intermediate</div>
            </div>
          </div>
        </div>
        <div className="right_col">
          <div className="skill">
            <i className="ri-checkbox-circle-line"></i>
            <div className="rr">
              <div className="skill_name">Bootstrap</div>
              <div className="level">intermediate</div>
            </div>
          </div>
          <div className="skill">
            <i className="ri-checkbox-circle-line"></i>
            <div className="rr">
              <div className="skill_name">React</div>
              <div className="level">intermediate</div>
            </div>
          </div>
          <div className="skill">
            <i className="ri-checkbox-circle-line"></i>
            <div className="rr">
              <div className="skill_name">Tailwindcss</div>
              <div className="level">intermediate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
