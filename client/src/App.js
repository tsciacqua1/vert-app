import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Activities from "./components/Activities";
import Home from "./components/Home";
import MonthStats from "./components/MonthStats";
import Stats from "./components/Stats";
import "./scss/global.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/stats/:id" element={<MonthStats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
