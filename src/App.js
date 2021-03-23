import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/MyNav";
import FooterStore from "./components/MyFooter";
import WelcomeJumbo from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";

function App() {
  return (
    <div>
      <NavBar />
      <WelcomeJumbo />
      <LatestRelease />
      <FooterStore />
    </div>
  );
}

export default App;
