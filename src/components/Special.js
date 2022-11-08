import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Special = () => {
  const [millers, setMillers] = useState([]);
  const [updated, setUpdated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [millerObj, setMillerObj] = useState([]);
  const [millerNome, setMillerNome] = useState([]);
  const [millerCognome, setMillerCognome] = useState([]);
  const [searchNome, setSearchNome] = useState([]);
  const [searchCognome, setSearchCognome] = useState([]);
  const [errorNome, setErrorNome] = useState();
  const [errorCognome, setErrorCognome] = useState(false);
  const [imgPop, setImgPop] = useState();
  const [timerPop, setTimerPop] = useState(false);
  const [nomeValue, setNomeValue] = useState([]);
  const [cognomeValue, setCognomeValue] = useState([]);
  const handleValueNome = (e) => {
    handleChangeNome(e)
    setNomeValue(e.target.value.toLowerCase());
  };
  const handleValueCognome = (e) => {
    handleChangeCognome(e)

    setCognomeValue(e.target.value.toLowerCase());
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
  const reloadPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  const verifyName = (cognomeSelect) => {
    //Controlllo
    if (cognomeSelect == "") {
      badStickerPop();
    } else {
      if (
        cognomeSelect[0].Cognome === searchCognome &&
        cognomeSelect[0].Nome === searchNome
      ) {
        if (cognomeSelect[0].Foto) {
          setImgPop(cognomeSelect[0].Foto);
          setTimerPop(true);
          const timer = setTimeout(() => {
            setTimerPop(false);
          }, 2000);
        } else {
          goodStickerPop(cognomeSelect);
        }
      } else {
        badStickerPop();
        //reloadPage();
      }
    }
    setNomeValue("")
    setCognomeValue("")
    //reloadPage();
  };

  const handleChangeNome = (e) => {
    // filtro
    if (e.target.value == "") {
      setMillerNome(millerObj);
    } else {
      var millerX = []; // popolo l'array
      var i;
      for (i = 0; i < millers.length; i++) {
        if (
          millers[i].Nome.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          setSearchNome(e.target.value.toLowerCase());
          millerX.push(millers[i]);
          console.log(millerX);
        }
      }
      setMillerNome(millerX);
      /* Cambio colore Input Nome*/
      if (millerX == "") {
        setErrorNome(false);
      } else {
        setErrorNome(true);
      }
    }
  };
  const handleChangeCognome = (e) => {
    // filtro
    if (e.target.value == "") {
      setMillerCognome(millerObj);
    } else {
      //eseguo for tra i nomi selezionati
      var millerX = []; // popolo l'array
      var i;
      for (i = 0; i < millerNome.length; i++) {
        if (
          millerNome[i].Cognome.toLowerCase().includes(
            e.target.value.toLowerCase()
          )
        ) {
          setSearchCognome(e.target.value.toLowerCase());
          millerX.push(millerNome[i]);
        }
      }
      setMillerCognome(millerX);
      console.log(millerX);
      /* Cambio colore Input Cognome*/
      if (millerX == "") {
        setErrorCognome(false);
      } else {
        setErrorCognome(true);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setMillers(location.state.millers);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex-col flex flex-wrap justify-center bg-black p-2 pt-4 w-full h-screen">
      <div class="w-50 h-50 absolute top-2 left-2">
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
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </button>
        </div>
        <span className=" mt-10">Indovina sia il Nome che il Cognome</span>
        <form className="flex flex-wrap align-middle w-full justify-center">
          <label className="text-center m-1 space-y-2">
            <span className="block text-2xl font-medium text-slate-500">
              Nome
            </span>
            <input
            value={nomeValue}
              //style={{ borderColor:  nomeValue === ""? "green" : "red" }}
              className="rounded-md border-4 p-1 px-2 text-center capitalize focus:outline-none"
              onChange={handleValueNome}
            />
          </label>
          <label className="text-center m-1 space-y-2">
            <span className="block text-2xl font-medium text-slate-500">
              Cognome
            </span>
            <input
            value={cognomeValue}
              //style={{ borderColor: cognomeValue === "" ? "green" : "red" }}
              className="rounded-md border-4 p-1 px-2 text-center capitalize focus:outline-none"
              onChange={handleValueCognome}
            />
          </label>
        </form>
        <div className="flex mx-auto p-4 mt-4">
          <button
            //style={{ backgroundColor:  "green"}}
            onClick={() => handleCheck()}
            className="bg-black border border-white shadow-white rounded-md p-3 text-2xl text-white font-bold uppercase shadow-md"
          >
            Controlla!
          </button>
        </div>
      </div>
      {/* MODAL */}
      <div></div>
      {timerPop
        ? (console.log(`../images/${imgPop}`),
          (
            <div
              style={{
                display: timerPop ? "flex" : "none",
              }}
              id="modal"
              className="fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center"
            >
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

export default Special;

/* 
<span className=" mt-10">Indovina sia il Nome che il Cognome</span>
        <form className="flex flex-wrap align-middle w-full justify-center">
          <label className="text-center m-1 space-y-2">
            <span className="block text-2xl font-medium text-slate-500">
              Nome
            </span>
            <input
              style={{ borderColor: errorNome ? "green" : "red" }}
              className="rounded-md border-4 p-1 px-2 text-center capitalize focus:outline-none"
              onChange={handleChangeNome}
            />
          </label>
          <label className="text-center m-1 space-y-2">
            <span className="block text-2xl font-medium text-slate-500">
              Cognome
            </span>
            <input
              style={{ borderColor: errorCognome ? "green" : "red" }}
              className="rounded-md border-4 p-1 px-2 text-center capitalize focus:outline-none"
              onChange={handleChangeCognome}
            />
          </label>
        </form>
        <div className="flex mx-auto p-4">
          <button
            style={{ backgroundColor: errorNome ? "green" : "red" }}
            onClick={() => handleCheck()}
            className="bg-green-600 rounded-md p-2 text-white font-bold uppercase shadow-md"
          >
            Controlla!
          </button>
        </div>
*/
