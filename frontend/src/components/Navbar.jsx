import { LogIn, Shield } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { assets } from "../Assets/assets";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();
  const { navigate } = useAppContext();

  // Transform values based on scroll
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 20]);
  const navbarOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);

  // Mock context values - replace with your actual context
  const token = localStorage.getItem("token"); // Replace with actual token state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      // initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20"
          : "bg-transparent"
      }`}
      style={{
        backdropFilter: `blur(${backdropBlur}px)`,
        backgroundColor: `rgba(255, 255, 255, ${navbarOpacity})`,
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 opacity-0 transition-opacity duration-500 hover:opacity-100" />

      <div className="relative flex justify-between items-center py-4 px-6 max-w-7xl mx-auto">
        {/* Logo with magnetic effect */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative cursor-pointer group"
        >
          {/* Replace with your actual logo */}
          <div
            onClick={() => navigate("/")}
            className="relative flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent"
          >
            <img
              src={assets.logo}
              className="w-32 sm:w-40 cursor-pointer"
              alt="logo"
              onClick={() => navigate("/")}
            />
          </div>
        </motion.div>

        {/* Enhanced login button */}
        <motion.button
          onClick={() => navigate("/admin")}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
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
              {token ? "Dashboard" : "Login"}
            </motion.span>

            <motion.div
              animate={{
                rotate: isHovered ? 360 : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {token ? (
                <Shield className="w-5 h-5" />
              ) : (
                <LogIn className="w-5 h-5" />
              )}
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

      {/* Bottom border animation */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
        initial={{ width: 0 }}
        animate={{ width: isScrolled ? "100%" : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

export default Navbar;
