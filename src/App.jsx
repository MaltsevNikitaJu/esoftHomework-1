import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Header />
      </header>
      <main className="app-main">
        <HomePage />
      </main>
      <footer className="app-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
