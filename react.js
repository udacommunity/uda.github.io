import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`w-full p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} shadow-md`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Menyular */}
        <nav className="flex space-x-4">
          <a href="#" className="font-semibold hover:text-blue-500">Bosh sahifa</a>
          <a href="#" className="font-semibold hover:text-blue-500">Haqida</a>
          <a href="#" className="font-semibold hover:text-blue-500">Xizmatlar</a>
          <a href="#" className="font-semibold hover:text-blue-500">Loyihalar</a>
          <a href="#" className="font-semibold hover:text-blue-500">A'zolar</a>
          <a href="#" className="font-semibold hover:text-blue-500">Bog‘lanish</a>
        </nav>

        {/* Tugmalar */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Kirish</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">Ro‘yxatdan o‘tish</button>
          <button
            className="px-3 py-2 bg-gray-300 dark:bg-gray-700 rounded-md"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </div>
  );
    }
