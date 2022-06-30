import logo from "./Datrockets-logo.png";
import "./App.css";

const filter = [
  "NODE_ENV",
  "PUBLIC_URL",
  "FAST_REFRESH",
  "REACT_APP_VERCEL_ORG_ID",
  "REACT_APP_VERCEL_GIT_COMMIT_SHA",
  "REACT_APP_VERCEL_URL",
  "REACT_APP_VERCEL_ENV",
  "REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_LOGIN",
  "REACT_APP_VERCEL_GIT_PROVIDER",
  "REACT_APP_VERCEL_PROJECT_ID",
  "REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_NAME",
  "REACT_APP_VERCEL_BUILD_OUTPUTS_EDGE_FUNCTION",
  "REACT_APP_VERCEL_GIT_REPO_OWNER",
  "REACT_APP_VERCEL_GIT_REPO_SLUG",
  "REACT_APP_VERCEL_GIT_COMMIT_MESSAGE",
  "REACT_APP_VERCEL_ARTIFACTS_TOKEN",
  "REACT_APP_VERCEL_GIT_REPO_ID",
  "REACT_APP_VERCEL_ARTIFACTS_OWNER",
  "REACT_APP_VERCEL_GIT_COMMIT_REF",
  "REACT_APP_VERCEL_API_DC_ENDPOINT",
  "WDS_SOCKET_HOST",
  "WDS_SOCKET_PATH",
  "WDS_SOCKET_PORT",
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>Current list of .env variables</h2>
        <ul className>
          {Object.entries(process.env).map(([key, val]) =>
            filter.includes(key) ? null : (
              <li>
                <span>{key}</span> = <span>{val}</span>
              </li>
            )
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
