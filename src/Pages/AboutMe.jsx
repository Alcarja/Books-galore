const AboutMe = () => {
  return (
    <>
      <div className="about-us-container">
        <div className="about-us-card">
          <div className="about-us-card-left">
            <h1>About Me</h1>
            <p>My Name is Jaime Alcaraz</p>
            <p>
              I am an enthusiast Full Stack developer based in Spain. I love
              facing new challenges when trying to solve the conandrums of the
              web.
            </p>
            <p>
              In this project I explored the openlibrary.org API to make a
              useful search App for all the books available there.
            </p>
            <p>
              The stack used for this project is JavaScript and React for the
              front-end, and the already mentioned API to take care of the
              back-end. GitHub is also in use to make use of version control.
            </p>
            <div className="squares">
              <img src="../src/assets/js-logo.png" />
              <img src="../src/assets/css-3.png" />
              <img src="../src/assets/html-logo.png" />
              <img src="../src/assets/react-logo.png" />
              <img src="../src/assets/node-js.png" />
              <img src="../src/assets/mongodb-icon.png" />
              <img src="../src/assets/github-logo.png" />
            </div>
          </div>
          <div className="about-us-card-right">
            <img src="../src/assets/JaimeAlcaraz.jpeg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
