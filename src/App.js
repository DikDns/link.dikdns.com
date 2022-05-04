import profilePic from "./img/profile-pic.png";
import "./App.css";

function App() {
  return (
    <main>
      <img className="profile-pic" src={profilePic} alt="DikDns Logo" />
      <ul className="link-list">
        <li className="link-item">
          <a href="https://www.dikdns.com/" className="link">
            <div className="icon-wrapper">
              <i className="icon fa-solid fa-globe"></i>
            </div>
            Website
          </a>
        </li>
        <li className="link-item">
          <a
            href="https://discordapp.com/users/168393351186481153"
            className="link"
          >
            <div className="icon-wrapper">
              <i class="icon fa-brands fa-discord"></i>
            </div>
            Discord
          </a>
        </li>
        <li className="link-item">
          <a
            href="https://www.linkedin.com/in/andika-eka-kurnia-4960a5231/"
            className="link"
          >
            <div className="icon-wrapper">
              <i className="icon fa-brands fa-linkedin"></i>
            </div>
            LinkedIn
          </a>
        </li>
        <li className="link-item">
          <a href="https://www.instagram.com/dikdns/" className="link">
            <div className="icon-wrapper">
              <i className="icon fa-brands fa-instagram"></i>
            </div>
            Instagram
          </a>
        </li>
        <li className="link-item">
          <a href="https://twitter.com/dikdns_" className="link">
            <div className="icon-wrapper">
              <i className="icon fa-brands fa-twitter"></i>
            </div>
            Twitter
          </a>
        </li>
        <li className="link-item">
          <a
            href="https://www.youtube.com/channel/UCekKhkXSv6RdD9rXkW2ZvDA?sub_confirmation=1"
            className="link"
          >
            <div className="icon-wrapper">
              <i className="icon fa-brands fa-youtube"></i>
            </div>
            Youtube
          </a>
        </li>
      </ul>
    </main>
  );
}

export default App;
