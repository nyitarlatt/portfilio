import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__row">
        <div className="project">
          <img src={require("../img/note.PNG")} alt="" />
          <div className="overlay">
            <div className="name">Note App</div>

            <div className="project__links">
              <a
                href="https://velvety-selkie-f67f83.netlify.app/"
                target={"_"}
                className="project__link live"
              >
                <i className="ri-link"></i>
              </a>
              <a
                href="https://github.com/nyitarlatt/note-react"
                target={"_"}
                className="project__link code"
              >
                <i className="ri-code-line"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={require("../img/amazon.PNG")} alt="" />

          <div className="overlay">
            <div className="name">Amazon Clone</div>

            <div className="project__links">
              <a
                href="https://unique-zabaione-4e7531.netlify.app/"
                target={"_"}
                className="project__link live"
              >
                <i className="ri-link"></i>
              </a>
              <a
                href="https://github.com/nyitarlatt/amazon-challenge"
                target={"_"}
                className="project__link code"
              >
                <i className="ri-code-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projects__row">
        <div className="project">
          <img src={require("../img/sort.PNG")} alt="" />

          <div className="overlay">
            <div className="name">Sorting Visualizer</div>

            <div className="project__links">
              <a
                href="https://nyitarlatt.github.io/sorting-visualizer/"
                target={"_"}
                className="project__link live"
              >
                <i className="ri-link"></i>
              </a>
              <a
                href="https://github.com/nyitarlatt/sorting-visualizer"
                target={"_"}
                className="project__link code"
              >
                <i className="ri-code-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
