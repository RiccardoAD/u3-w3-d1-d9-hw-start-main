import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNav from "./components/MyNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FetchCard from "./components/FetchCard";
import FetchCardInfo from "./components/FetchCardInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <MyNav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<FetchCard />} />
            <Route path="/card/:id" element={<FetchCardInfo />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
