import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="profile__container">
        <div className="profile__border">
          <div className="profile__pic">
            <img src={require("../img/perfil.png")} alt="" />
          </div>
        </div>
        <h2>Nyi Tar Latt</h2>
        <h6>Web developer</h6>
        <div className="links">
          <a href="https://twitter.com/NyiTar10" target={"_"}>
            <i className="ri-twitter-line"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nyi-tar-latt-290638226/"
            target={"_"}
          >
            <i className="ri-linkedin-box-line"></i>
          </a>
          <a href="https://github.com/nyitarlatt" target={"_"}>
            <i className="ri-github-line"></i>
          </a>
        </div>
        <div className="profile__info">
          <div className="profile__info-group">
            <h3 className="profile__info-number">1+</h3>
            <p className="profile__info-description">
              Years of <br />
              work
            </p>
          </div>
          <div className="profile__info-group">
            <h3 className="profile__info-number">+10</h3>
            <p className="profile__info-description">
              Completed <br />
              projects
            </p>
          </div>
          <div className="profile__info-group">
            <h3 className="profile__info-number">0</h3>
            <p className="profile__info-description">
              Satisfied <br />
              customers
            </p>
          </div>
        </div>
        <div className="profile__links">
          <a download="" href={require("../img/Resume.pdf")} className="button">
            Download CV <i className="ri-download-line"></i>
          </a>
          <div className="social__links">
            <a
              href="https://api.whatsapp.com/send?phone=_959768964267&text=Hello, more information!"
              target={"_"}
            >
              <i className="ri-whatsapp-line"></i>
            </a>
            <a href="https://m.me/ariko.nora" target={"_"}>
              <i className="ri-messenger-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
