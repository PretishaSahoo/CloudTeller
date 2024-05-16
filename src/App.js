import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.js";
import TabularView from "./Components/TabularView.js";
import MapView from "./Components/MapView.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tabularview" element={<TabularView />} />
          <Route exact path="/mapview" element={<MapView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
