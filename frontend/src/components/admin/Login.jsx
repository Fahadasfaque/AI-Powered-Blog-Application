import { useState } from "react";
import { LogIn, Sparkles, Shield } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useAppContext } from "../../context/appContext";
import toast from "react-hot-toast";

const Login = () => {
  const { axios, setToken } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email,password)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post("/api/admin/login", {
        email,
        password,
      });
      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        axios.defaults.headers.common["Authorization"] = data.token;
        toast.success(data.success ? "login suceessfully" : 'not login')
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-6 text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-primary">Admin Login</span>
            </h1>
            <p className="font-light">
              Enter your credentials to access the admin panel
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-6 w-full sm:max-w-md text-gray-600"
          >
            <div className="flex flex-col">
              <label>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                required
                placeholder="your email id"
                className="border-b-2 border-gray-300 p-3 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                required
                placeholder="your password"
                className="border-b-2 border-gray-300 p-3 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-3 font-medium bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all "
            >
              {" "}
              Login{" "}
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
