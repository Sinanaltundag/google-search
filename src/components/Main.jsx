import React from "react";
import SearchBar from "./SearchBar";
import googleSvg from "../assets/Google1.svg";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate= useNavigate();
  const handleSearch =(e)=>{
e.preventDefault();
navigate("/search")
  }
  return (
    <div className=" flex flex-col gap-5 justify-center items-center">
      <img src={googleSvg} alt="" />
      <SearchBar />
      <form className="" onSubmit={handleSearch}>
        <button className="bg-gray-200 px-5 py-2 text-gray-900 rounded dark:bg-gray-700 dark:text-gray-100 mr-3"
        type="submit"
        
        >
          Search Googlee
        </button>
        <button className="bg-gray-200 px-5 py-2 text-gray-900 rounded dark:bg-gray-700 dark:text-gray-100">
          I feel lucky
        </button>
      </form>
    </div>
  );
};

export default Main;
