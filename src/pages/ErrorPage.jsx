import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="m-auto max-w-80 py-6">
      <h1 className="font-bold text-2xl">
        Sorry, The page you were looking for was not found{" "}
      </h1>
      <Link to='.' className="bg-black w-full text-center text-white block my-4 p-3 rounded-md ">
        Return home
      </Link>
    </div>
  );
};

export default ErrorPage;
