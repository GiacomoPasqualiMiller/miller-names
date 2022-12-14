import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Nome = () => {
  const [cognomeCasuale, setCognomeCasuale] = useState([]);
  const [goodSticker, setGoodSticker] = useState(false);
  const [badSticker, setBadSticker] = useState(false);
  const [millerCognome, setMillerCognome] = useState([]);
  const [searchNome, setSearchNome] = useState([]);
  const [searchCognome, setSearchCognome] = useState([]);
  const [nomeValue, setNomeValue] = useState([]);
  const [millers, setMillers] = useState([]);
  const [correzzione, setCorrezzione] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [count, setCount] = useState(0);
  const [timerPop, setTimerPop] = useState(false);
  const [imgPop, setImgPop] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  localStorage.setItem("nomi_indovinati", count);
  const handleChange = (e) => {
    setNomeValue(e.target.value.toLowerCase());
  };
  const handleCheck = () => {
    verifyName(millerCognome);
  };
  const goodStickerPop = () => {
    const x = { Foto: "good.webp" };
    setImgPop(x.Foto);
    setTimerPop(true);
    const timer = setTimeout(() => {
      setTimerPop(false);
    }, 1000);

    //reloadPage();
  };
  const badStickerPop = () => {
    const x = { Foto: "bad.webp" };
    setImgPop(x.Foto);
    setTimerPop(true);
    const timer = setTimeout(() => {
      setTimerPop(false);
    }, 2000);
    //reloadPage();
  };
  const verifyName = (e) => {
    console.log(millers[cognomeCasuale]);
    if (nomeValue === millers[cognomeCasuale].Nome) {
      setCount(count + 1);
    } else {
      setCorrezzione(millers[cognomeCasuale].Nome);
      badStickerPop();
    }
    cognomiRandom();
    setNomeValue("");
  };
  const cognomiRandom = () => {
    setCognomeCasuale(Math.floor(Math.random() * 67));
  };
  useEffect(() => {
    const fetchData = async () => {
      setMillers(location.state.millers);
      cognomiRandom();

      if (millers !== "") {
        setUpdated(true);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex-col flex flex-wrap justify-center bg-black p-2 pt-4 w-full h-screen">
        <div className="w-50 h-50 absolute top-2 left-2">
          <button
            style={{ color: "white" }}
            onClick={() => navigate("/")}
            id="back-btn"
            className="w-50 h-50 bg-gray-700 focus:outlink-none focus:ring-4 focus:ring-gray-700 ring-gray-200 rounded-lg p-2.5 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </button>
        </div>
        <span className=" mt-10">Indovina il Nome</span>
        <span className="font-bold text-2xl">
          {localStorage.getItem("nomi_indovinati")}
        </span>
        <form className="flex flex-wrap align-middle w-full justify-center">
          <label className="text-center m-1 space-y-2">
            <span className="block text-2xl font-medium text-slate-500">
              Cognome
            </span>
            {/* aspetto il caricamento del valore causale cognome */}
            {updated ? (
              <input
                disabled
                value={millers[cognomeCasuale].Cognome}
                className="disabled:bg-white capitalize rounded-md border-4 p-1 px-2 text-center focus:outline-none"
              />
            ) : (
              <input
                disabled
                className="disabled:bg-white capitalize rounded-md border-4 p-1 px-2 text-center focus:outline-none"
              />
            )}
          </label>
          <label className="text-center m-1 space-y-2">
            <span className="block text-2xl font-medium text-slate-500">
              Nome
            </span>
            <input
              value={nomeValue}
              onChange={handleChange}
              className="capitalize rounded-md border-4 p-1 px-2 text-center focus:outline-none"
            />
          </label>
        </form>
        <div className="flex mx-auto p-4 mt-4">
          <button
            onClick={verifyName}
            className="bg-black border border-white shadow-white text-2xl rounded-md p-3 text-white font-bold uppercase shadow-md"
          >
            controlla!
          </button>
        </div>
      </div>
      <div></div>
      {timerPop
        ? (console.log(`../images/${imgPop}`),
          (
            <div
              style={{
                display: timerPop ? "flex" : "none",
              }}
              id="modal"
              className="fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex flex-col justify-center items-center"
            >
              <span className="font-bold text-4xl uppercase">
                {correzzione} !
              </span>
              <img
                style={{ display: timerPop ? "flex" : "none" }}
                src={require(`../images/${imgPop}`)}
                alt=""
              />
            </div>
          ))
        : ""}
    </>
  );
};

export default Nome;
