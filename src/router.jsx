import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";

/**
 *
 */
function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default Router;
