import React, { useState } from "react";
import api from "./api/api";
import { useNavigate } from "react-router-dom";
import soundFile from "./jingle.mp3"
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let sound = new Audio(soundFile);
  






  const navigate = useNavigate();

  const HandleLogin = async (event) => {
    event.preventDefault();
    const response = await api.post("login", {
      username: username,
      password: password,
    });

    if (
      response.data === "password errata" ||
      response.data === "utente non trovato"
    ) {
      alert("Username o Password errati");
    } else {
      console.log(response.data.utente);
      sessionStorage.setItem("usernameMillerGames", username);
      
      sound.play();
      sound.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
      navigate("/home");
    }
  };

  return (
<>

    <div
      className="snow w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-[#262A73] to-[#060044] p-2"
    >
      
      <form
        className=" bg-white rounded-xl shadow-lg shadow-white space-y-5 px-2 py-6 flex flex-wrap align-middle w-10/12 mx-auto justify-center border-2 border-[#262A73]"
        onSubmit={HandleLogin}
      >
        <h1 className="text-center text-[#262A73] text-4xl  uppercase w-full font-semibold mb-3">
          Miller Names
        </h1>

        <label className="text-center my-1 w-full space-y-2">
          <input
            className="rounded-md border-2 border-[#262A73] p-1 px-0 text-center w-2/3  focus:outline-none"
            type="text"
            placeholder="nome.cognome"
            name="user"
            id="user"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="text-center my-1 w-full space-y-2" for="password">
          <input
            className="rounded-md border-2 border-[#262A73] p-1 px-0 text-center w-2/3 focus:outline-none"
            type="password"
            placeholder="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          className="bg-[#262A73] rounded-md p-3 text-xl text-white font-semibold uppercase mx-auto w-1.5/3"
          type="submit"
          onClick={() => HandleLogin()}
        >
          ENTRA
        </button>
      </form>
    </div>
    </>
  );
};

export default Login;
