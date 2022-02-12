import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ScalesTrainer from "./pages/ScalesTrainer";

/**
 *
 */
function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ScalesTrainer />} />
      </Routes>
    </>
  );
}

export default Router;
