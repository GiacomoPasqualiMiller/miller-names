import React,{useState} from "react";
import api from "./api/api";
import { useNavigate } from "react-router-dom";





const Login = () =>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();



    const HandleLogin = async(event) =>{
        event.preventDefault();
          const response = await api
          .post('login',{username :username,password:password });
    
     if(response.data==="password errata" || response.data==="utente non trovato" ){
        alert("Username o Password errati");
      }else{
        console.log(response.data.utente);
        sessionStorage.setItem("usernameMillerGames",username);
      navigate("/home")
    
      }
      }

return (

    <div className="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-[#262A73] to-[#060044]">
        <form className="p-10 bg-white rounded-xl drop-shadow-lg space-y-5" action="" onSubmit={HandleLogin}>
            <h1 className="text-center text-3xl">Miller Names</h1>
            <div className="flex flex-col space-y-2">
                <label className="text-sm font-light" for="user">User</label>
                <input className="w-96 px-3 py-2 rounded-md border border-slate-400" type="text" placeholder="nome.cognome"
                    name="user" id="user" 
                    value={username}
                    onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-2">
                <label className="text-sm font-light" for="password">Password</label>
                <input className="w-96 px-3 py-2 rounded-md border border-slate-400" type="password"
                    placeholder="password" name="password" id="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                    />
            </div>

            <button className="w-full px-10 py-2 bg-blue-600 text-white rounded-md
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in" type="submit" onClick={HandleLogin}>
                Log in
            </button>

        </form>
    </div>


)


}




export default Login