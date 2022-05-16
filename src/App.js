import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Results from "./components/Results";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen ">
        <div className=" flex flex-col justify-between min-h-screen ">
          <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Routes>
        {/* <Route index element={<Main />} /> */}
        <Route path="/" element={<Main />}/>
          {/* <Route index element={<Results />} /> */}
          <Route path="search" element={<Results />} />
          <Route path="image" element={<Results />} />
          <Route path="video" element={<Results />} />
          <Route path="news" element={<Results />} />
        <Route path="*" element={<About />} />
      </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
