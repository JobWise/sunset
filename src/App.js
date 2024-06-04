import logo from "./logo-full-white.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ height: "50px" }}
        />
        <div style={{ display: "flex", gap: 12, flexDirection: "column" }}>
          <p style={{ fontSize: 24 }}>
            The job placement and outcome tracking services of Jobwise are no
            longer supported. We apologize for any inconvenience.
            <br />
            <br />
            You may request a data export of your outcome information by
            reaching out to support@jobwise.com.
          </p>

          <a
            style={{ color: "white", fontSize: 18 }}
            href="https://jobwise.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            See the new Jobwise
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
