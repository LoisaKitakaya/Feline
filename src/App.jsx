import { Route, Routes } from "react-router-dom";
import Footer from "./components/nav/Footer";
import Navbar from "./components/nav/Navbar";

import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
