import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Index2 from "./RecommendationPage/Index2";

function Appako() {
  return (
    <div className="App">
      <div style={{ minHeight: "100vh" }}>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/2" element={<Index2 />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default Appako;
