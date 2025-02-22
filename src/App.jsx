import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import Login from "./pages/auth/Login";
import appRoutes from "@/routes"; // Yönlendirmeleri içeri aktarıyoruz.

const App = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route
        path="/*"
        element={
          isAuthenticated ? (
            <div className="flex h-screen">
              <div className="w-64 fixed h-full">
                <Sidebar />
              </div>
              <div className="flex flex-col flex-1 ml-[18rem]">
                <Navbar />
                <div className="p-6 mt-16 w-full">
                  <Routes>
                    {appRoutes.map((route, index) => (
                      <Route key={index} path={route.path} element={route.element} />
                    ))}
                  </Routes>
                </div>
              </div>
            </div>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
};

export default App;
