import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Kullanıcıyı otomatik olarak giriş yapmış kabul et
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", JSON.stringify({ name: "İshak Pehlivan", email: "ishak.pehlivan@yemekhane.com.tr" }));
    
    setIsAuthenticated(true);
    navigate("/"); // Ana sayfaya yönlendir
  }, [navigate, setIsAuthenticated]);

  return null; // Ekranda hiçbir şey göstermeden yönlendir
};

export default Login;
