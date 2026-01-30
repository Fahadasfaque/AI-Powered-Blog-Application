import { assets } from "../../Assets/assets";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import { motion, useScroll, useTransform } from "framer-motion";

import { useAppContext } from "../../context/appContext";
import toast from "react-hot-toast";
import { useState } from "react";
import { LogIn, LogOut, Shield } from "lucide-react";

const Layout = () => {
  const { axios, setToken, navigate } = useAppContext();

  const [isHovered, setIsHovered] = useState(false);
  const logout = () => {
    try {
      localStorage.removeItem("token");
      axios.defaults.headers.common["Authorization"] = null;
      setToken(null);
      toast.success("logout successfully");
      navigate("/");
    } catch (error) {
      toast.error("unable to logged out");
    }
  };
  return (
    <>
      <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200">
        <img
          src={assets.logo}
          className="w-32 sm:w-40 cursor-pointer"
          alt="logo"
          onClick={() => navigate("/")}
        />
        <motion.button
          onClick={logout}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group overflow-hidden"
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full"
            animate={{
              backgroundPosition: isHovered ? "200% 0" : "0% 0",
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              backgroundSize: "200% 100%",
            }}
          />

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />

          {/* Button content */}
          <div className="relative flex items-center gap-3 px-8 py-3 text-white font-medium">
            <motion.span
              animate={{ x: isHovered ? 2 : 0 }}
              transition={{ duration: 0.2 }}
            >
              Logout
            </motion.span>

            <motion.div
              animate={{
                rotate: isHovered ? 360 : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <LogOut className="w-5 h-5" />
            </motion.div>
          </div>

          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ scale: 0, opacity: 0.5 }}
            whileTap={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
            }}
          />
        </motion.button>
      </div>

      <div className="flex h-[calc(100vh-70px)]">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
