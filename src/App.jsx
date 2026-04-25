import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [currentPath, setCurrentPath] = useState(() =>
    window.location.pathname === "/" ? "/tv" : window.location.pathname
  );

  useEffect(() => {
    if (window.location.pathname === "/") {
      window.history.replaceState({}, "", "/tv");
    }

    const onPopState = () => setCurrentPath(window.location.pathname || "/tv");
    window.addEventListener("popstate", onPopState);

    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigateTo = (path) => {
    if (window.location.pathname === path) {
      setCurrentPath(path);
      return;
    }

    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  return (
    <div className="app">
      <header className="app-header">
        <Header currentPath={currentPath} onNavigate={navigateTo} />
      </header>
      <main className="app-main">
        <HomePage currentPath={currentPath} />
      </main>
      <footer className="app-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
