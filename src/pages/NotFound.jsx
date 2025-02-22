import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center bg-gray-100"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 404 İkonu */}
      <motion.h1
        className="text-8xl font-bold text-red-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>

      <p className="text-lg text-gray-700 mt-4">Üzgünüz, aradığınız sayfa bulunamadı.</p>

      <div className="mt-6 flex space-x-4">
        {/* Ana Sayfaya Dön Butonu */}
        <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600 transition">
          Ana Sayfaya Dön
        </Link>

        {/* Geri Git Butonu */}
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-500 text-white rounded shadow-lg hover:bg-gray-600 transition"
        >
          Önceki Sayfaya Dön
        </button>
      </div>
    </motion.div>
  );
};

export default NotFound;
