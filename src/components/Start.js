import React from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  return (
    <div
      className="snow w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-[#262A73] to-[#060044]"
    >
      <div className="w-full flex flex-wrap justify-center p-5 rounded-lg">
        <h1 className="text-center text-white text-4xl uppercase w-full font-semibold mb-6">Miller Names</h1>
        <div className="flex w-full">
          <button
            className="bg-[#262A73] shadow-white shadow-md rounded-md px-5 p-4 text-2xl text-white font-semibold uppercase mx-auto"
            type="submit"
            onClick={() => navigate("/foto")}
          >
            Gioca
          </button>
          {/* <button
            className="w-full px-10 py-2 bg-blue-600 text-white rounded-md
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
            onClick={() => navigate("/classifica")}
          >
            Classifica
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Start;
