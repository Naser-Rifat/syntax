import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../Contexts/ContextProvider";

const Header = () => {
  const {
    firebaseContext: { logOut },
  } = useStateContext();
  return (
    <div>
      <div className="relative shadow bg-white">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"></div>

        <div className="w-full backdrop-blur-sm">
          <div className="relative z-1 h-16 mx-auto px-5 max-w-7xl flex items-center justify-between text-white">
            <Link
              className="text-2xl hover:text-cyan-400 text-gray-700  transition-colors"
              href=""
            >
              Logo
            </Link>

            <ul className="flex items-center gap-5">
              <li>
                <Link
                  className="hover:text-cyan-400 text-lg capitalize text-gray-700 transition-colors"
                  to=""
                >
                  home{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-cyan-400 text-lg capitalize text-gray-700 transition-colors"
                  to=""
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-cyan-400 text-lg capitalize text-gray-700 transition-colors"
                  to=""
                >
                  services
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-cyan-400 text-lg capitalize text-gray-700 transition-colors"
                  to=""
                >
                  portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-cyan-400 text-lg capitalize text-gray-700 transition-colors"
                  to=""
                >
                  pricing
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-cyan-400 text-lg capitalize text-gray-700 transition-colors"
                  to=""
                >
                  blog
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-cyan-400 text-lg capitalize text-gray-700 transition-colors"
                  to=""
                >
                  contact
                </Link>
              </li>
              <li>
                <h1 className="text-gray-700">
                  {localStorage.getItem("admin") === "true"
                    ? "Admin"
                    : localStorage.getItem("user") === "true"
                    ? "User"
                    : ""}
                </h1>
              </li>
              <li>
                {localStorage.getItem("user") === "true" && (
                  <Button variant="outlined" onClick={logOut}>
                    Logout
                  </Button>
                )}
              </li>
              <li>
                <Link
                  to={
                    localStorage.getItem("admin") === "true" ? "/dashboard" : ""
                  }
                >
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#FF0000", color: "#ffff" }}
                    className="capitalize bg-red-500 text-gray-200 hover:none"
                    to=""
                  >
                    {localStorage.getItem("admin") === "true"
                      ? "Go to Dashboard"
                      : "Get Started "}
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
