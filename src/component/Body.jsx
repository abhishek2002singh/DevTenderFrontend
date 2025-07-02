import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";
import { BASE_URL } from '../utils/Constant';
import { useDispatch, useSelector } from "react-redux";
import { addUser } from '../utils/userSlice';
import { useEffect } from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import HelpCenter from "../help/HelpCenter";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useSelector((store) => store.theme);
  const selector = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (selector) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.response?.status === 401) {
        navigate("/login");
      }
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "light"
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-l from-[#7DC387] to-[#DBE9EA] text-gray-800"
      }`}
    >
      <NavBar />
      
      <div className="flex flex-1 relative">
        <Sidebar />
        
        <main className="flex-1">
          <HelpCenter />
          <Outlet />
        </main>
      </div>
      
      <Footer /> {/* Footer will stick to the bottom */}
    </div>
  );
};

export default Body;