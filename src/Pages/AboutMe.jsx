const AboutMe = () => {
  return (
    <>
      <div className="about-me-container">
        <div className="about-me-card">
          <div className="about-me-card-left">
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
              <img src="Images/js-logo.png" />
              <img src="Images/css-3.png" />
              <img src="Images/html-logo.png" />
              <img src="Images/react-logo.png" />
              <img src="Images/node-js.png" />
              <img src="Images/mongodb-icon.png" />
              <img src="Images/github-logo.png" />
            </div>
          </div>
          <div className="about-me-card-right">
            <img src="Images/JaimeAlcaraz.jpeg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
