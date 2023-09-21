import { Link } from "react-router-dom";

const Contact = () => {
  const recipientEmail = "jaime.alcarazc@gmail.com";

  return (
    <>
      <div className="contact-container">
        <div className="contact-card">
          <h1>Contact</h1>
          <h2>Contact me trough e-mail:</h2>
          <Link to={`mailto:${recipientEmail}`} target="_blank">
            <h3>Jaime.alcarazc@gmail.com</h3>
          </Link>
          <div className="images">
            <Link to="https://github.com/Alcarja" target="_blank">
              <img src="./public/Images/github-logo.png" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/jaime-alcaraz-castillo/"
              target="_blank"
            >
              <img src="./public/Images/linkedin.png" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
