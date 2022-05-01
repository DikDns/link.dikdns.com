import profilePic from "./img/profile-pic.png";
import "./App.css";

function App() {
  return (
    <main>
      <img className="profile-pic" src={profilePic} alt="DikDns Logo" />
      <ul className="link-list">
        <li className="link-item">
          <a href="https://www.dikdns.com/" className="link">
            <i className="icon fa-solid fa-globe"></i> Website
          </a>
        </li>
        <li className="link-item">
          <a
            href="https://www.linkedin.com/in/andika-eka-kurnia-4960a5231/"
            className="link"
          >
            <i className="icon fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li className="link-item">
          <a href="https://www.instagram.com/dikdns/" className="link">
            <i className="icon fa-brands fa-instagram-square"></i> Instagram
          </a>
        </li>
        <li className="link-item">
          <a href="https://twitter.com/dikdns_" className="link">
            <i className="icon fa-brands fa-twitter-square"></i> Twitter
          </a>
        </li>
        <li className="link-item">
          <a
            href="https://www.youtube.com/channel/UCekKhkXSv6RdD9rXkW2ZvDA?sub_confirmation=1"
            className="link"
          >
            <i className="icon fa-brands fa-youtube-square"></i> Youtube
          </a>
        </li>
      </ul>
    </main>
  );
}

export default App;
