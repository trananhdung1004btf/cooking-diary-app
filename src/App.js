import Navbar from "./components/Navbar/Navbar";
import Content from "./pages/Content/Content";
import AboutUs from "./pages/AboutUs/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ThemMonAn from "./pages/ThemMonAn/ThemMonAn";
import XemMonAn from "./pages/XemMonAn/XemMonAn";

export default function App() {
  if (window.localStorage.getItem("danhSachMonAn") === null) {
    localStorage.setItem("danhSachMonAn", JSON.stringify([]));
  }

  const [danhSachMonAn, setDanhSachMonAn] = useState(
    JSON.parse(window.localStorage.getItem("danhSachMonAn"))
  );
  const [thongTinMonAn, setThongTinMonAn] = useState({});
  const [index, setIndex] = useState(-1);

  return (
    <Router>
      <div className="h-screen w-screen bg-[#343a40]">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <Content
                danhSachMonAn={danhSachMonAn}
                setDanhSachMonAn={setDanhSachMonAn}
                thongTinMonAn={thongTinMonAn}
                setThongTinMonAn={setThongTinMonAn}
                index={index}
                setIndex={setIndex}
              />
            }
          />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route
            path="/themMonAn"
            element={
              <ThemMonAn
                danhSachMonAn={danhSachMonAn}
                setDanhSachMonAn={setDanhSachMonAn}
                index={index}
                setIndex={setIndex}
              />
            }
          />
          <Route
            path="/xemMonAn"
            element={
              <XemMonAn
                thongTinMonAn={thongTinMonAn}
                setThongTinMonAn={setThongTinMonAn}
                index={index}
                setIndex={setIndex}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
