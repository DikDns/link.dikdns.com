import profilePic from "./img/profile-pic.png";
import "./App.css";

function App() {
  return (
    <main>
      <img className="profile-pic" src={profilePic} alt="DikDns Logo" />
      <ul className="link-list">
        <li className="link-item">
          <a href="#" className="link">
            <i className="icon fa-solid fa-globe"></i> Website
          </a>
        </li>
        <li className="link-item">
          <a href="#" className="link">
            <i className="icon fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li className="link-item">
          <a href="#" className="link">
            <i className="icon fa-brands fa-instagram-square"></i> Instagram
          </a>
        </li>
        <li className="link-item">
          <a href="#" className="link">
            <i className="icon fa-brands fa-twitter-square"></i> Twitter
          </a>
        </li>
        <li className="link-item">
          <a href="#" className="link">
            <i className="icon fa-brands fa-youtube-square"></i> Youtube
          </a>
        </li>
      </ul>
    </main>
  );
}

export default App;
