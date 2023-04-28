import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Drawer from "./components/nav/Drawer";
import Footer from "./components/nav/Footer";
import Navbar from "./components/nav/Navbar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const width = useSelector((state) => state.drawer.mainContentWidth);

  return (
    <div className="App flex flex-row">
      <div
        style={{
          width: width,
          position: "absolute",
          left: "0px",
          height: "100%",
        }}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>

        <Footer />
      </div>
      <Drawer />
    </div>
  );
};

export default App;
