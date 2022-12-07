import React from "react";
import { useNavigate } from "react-router-dom";




const Start = () =>{
const navigate = useNavigate();

return (

    <div className="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-[#262A73] to-[#060044]">
        <div className="p-10 bg-white rounded-xl drop-shadow-lg space-y-5">
            <h1 className="text-center text-3xl">Miller Names</h1>
            <div className="flex flex-col space-y-2">
               
         

            <button className="w-full px-10 py-2 bg-blue-600 text-white rounded-md
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in" type="submit" onClick={()=>navigate("/foto")} >
                Gioca
            </button>
            <button className="w-full px-10 py-2 bg-blue-600 text-white rounded-md
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in" type="submit" onClick={()=>navigate("/classifica")} >
                Classifica
            </button>
            </div>
            </div>
    </div>


)

}

export default Start;