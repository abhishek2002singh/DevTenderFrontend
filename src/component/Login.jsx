import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/Constant";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Validation function
  const checkValidationData = (email, password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password must contain at least 8 characters, including uppercase, lowercase, special characters and numbers.  example -- Seth@1234";
    return null;
  };

  const handleLogin = async () => {
    const validationError = checkValidationData(emailId, password);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null); // Clear any previous error

    try {
      const res = await axios.post(
        `${BASE_URL}/login`,
        { emailId, password },
        { withCredentials: true }
      );

      console.log("login response is "+ res )
      dispatch(addUser(res.data));
      
      navigate("/app");

    } catch (err) {
      console.error(err);
      setError("Failed to log in. Please check your credentials.");
    }
  };

  const handleSignup = async () => {
    const validationError = checkValidationData(emailId, password);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null); // Clear any previous error

    try {
      const res = await axios.post(
        `${BASE_URL}/signup`,
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      navigate("/app");
    } catch (err) {
      console.error(err);
      setError("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <section className="flex flex-col md:flex-row items-center p-8 md:p-16 bg-gray-800 text-white rounded-lg shadow-lg max-w-6xl w-full">
        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={
              isSignup
                ? "https://dev-tinder-di9z.vercel.app/assets/swipe-DKBteVz8.gif"
                : "https://dev-tinder-di9z.vercel.app/assets/Chat-BxILe8ch.gif"
            }
            alt={isSignup ? "Signup Illustration" : "Login Illustration"}
            className="rounded-lg shadow-md object-cover w-full h-full max-h-[400px]"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 w-full px-6 md:px-10 mt-10 md:mt-0">
          <div className="text-center md:text-left mb-8">
            <h2 className="text-3xl font-bold">{isSignup ? "Register" : "Log In"}</h2>
            <p className="text-sm text-gray-400">
              {isSignup
                ? "Welcome! Please create your account."
                : "Welcome back, please log in."}
            </p>
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {isSignup && (
            <>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 mb-4 text-gray-900 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3 mb-4 text-gray-900 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </>
          )}

          <input
            type="email"
            placeholder="Email ID"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            className="w-full p-3 mb-4 text-gray-900 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <p className="text-red-500 text-sm mb-4">{error}</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-6 text-gray-900 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <p className="text-red-500 text-sm mb-4">{error}</p>

          <button
            onClick={isSignup ? handleSignup : handleLogin}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded transition duration-300"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>

          <p className="mt-4 text-center">
            {isSignup ? "Existing User?" : "New User?"}{" "}
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              

              {isSignup ? "Log In Here" : "Sign Up"}
            </button>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
