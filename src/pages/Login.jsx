import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const users = [
  { email: "admin@yemekhane.com.tr", password: "deneme", role: "Admin" },
  { email: "kalitemuduru@yemekhane.com.tr", password: "deneme", role: "Kalite Müdürü" },
];

const Login = ({ setIsAuthenticated, setUserRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userRole", user.role);
      setIsAuthenticated(true);
      setUserRole(user.role);
      navigate("/dashboard", { replace: true });
    } else {
      setErrorMessage("❌ Geçersiz giriş bilgileri!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-900 to-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-center mb-6">
          <img src="https://yemekhane.com.tr/wp-content/uploads/2020/09/yemekhanelogo-1024x113.png" alt="Yemekhane" className="h-12" />
        </div>
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">Giriş Yap</h2>
        {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="email" 
            placeholder="E-posta" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
          />
          <input 
            type="password" 
            placeholder="Şifre" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
