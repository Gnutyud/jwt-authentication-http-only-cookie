import axios from "../config/axios";
import useAuth from "../hooks/useAuh";
import { useNavigate } from "react-router-dom";

function Home() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("/auth/logout", {
        withCredentials: true,
      });
      logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
    logout();
  };

  return (
    <>
      <div
        id="alert-additional-content-3"
        className="p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50"
        role="alert">
        <div className="flex items-center">
          <svg
            aria-hidden="true"
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"></path>
          </svg>
          <span className="sr-only">Info</span>
          <h3 className="text-lg font-medium">Login success</h3>
        </div>
        <div className="mt-2 mb-4 text-sm">
          Welcome to share to learn!
          <div>
            Let talk about JWT authentication with httpOnly cookie in React app.
          </div>
        </div>
        <div className="flex">
          <button
            type="button"
            className="text-green-800 bg-transparent border border-green-800 hover:bg-green-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center"
            onClick={handleLogout}
            aria-label="logout">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
