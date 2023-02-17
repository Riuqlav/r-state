import React from "react";
import { useLocation, useNavigate } from "react-router";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathMatchesRoute = (route) =>
    route === location.pathname
      ? "text-black border-b-2 border-red-400"
      : "text-gray-500";

  return (
    <div className="  bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex gap-2 justify-between max-w-6xl mx-auto ">
        <div className="flex flex-row gap-1 h-10 items-center ">
          <img
            onClick={() => navigate("/")}
            className="cursor-pointer h-10 "
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="logo"
          />{" "}
          <h1
            className="cursor-pointer font-semibold"
            onClick={() => navigate("/")}
          >
            ReactHome.com
          </h1>
        </div>
        <div>
          <ul className="flex flex-row pt-1 space-x-10 px-1">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold ${pathMatchesRoute(
                "/"
              )}`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold ${pathMatchesRoute(
                "/offers"
              )}`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold ${pathMatchesRoute(
                "/sign-in"
              )}`}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
