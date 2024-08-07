import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import ComprehensiveRankingSystem from "./pages/CRS";
import Root from "./pages/root";
import Prediction from "./pages/Prediction";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="crs" element={<ComprehensiveRankingSystem />} />
        <Route path="prediction" element={<Prediction />} />
      </Route>
    </Routes>
  );
};

export default App;
