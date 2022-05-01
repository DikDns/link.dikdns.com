import profilePic from "./img/profile-pic.png";
import "./App.css";

function App() {
  return (
    <main>
      <img className="profile-pic" src={profilePic} alt="DikDns Logo" />
      <ul className="link-list">
        <li className="link-item">
          <a href="#" className="link">
            Link 1
          </a>
        </li>
        <li className="link-item">
          <a href="#" className="link">
            Link 2
          </a>
        </li>
        <li className="link-item">
          <a href="#" className="link">
            Link 3
          </a>
        </li>
        <li className="link-item">
          <a href="#" className="link">
            Link 4
          </a>
        </li>
        <li className="link-item">
          <a href="#" className="link">
            Link 5
          </a>
        </li>
      </ul>
    </main>
  );
}

export default App;
