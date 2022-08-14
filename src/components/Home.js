import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const miller = [
  /*  {
    Id: 100,
    Nome: "giacomo",
    Cognome: "sss",
    Sezione: "tech",
  }, */
  {
    Id: 1,
    Nome: "giacomo",
    Cognome: "pasquali",
    Sezione: "tech",
  },
  {
    Id: 2,
    Nome: "federico",
    Cognome: "barenghi",
    Sezione: "tech",
  },
  {
    Id: 3,
    Nome: "andrea ilaria",
    Cognome: "leoni",
    Sezione: "tech",
  },
  {
    Id: 4,
    Nome: "william",
    Cognome: "piccione",
    Sezione: "tech",
  },
  {
    Id: 5,
    Nome: "martina",
    Cognome: "rosti",
    Sezione: "tech",
  },
  {
    Id: 6,
    Nome: "mattia",
    Cognome: "pavesi",
    Sezione: "tech",
  },
  {
    Id: 7,
    Nome: "ian",
    Cognome: "cavenaghi",
    Sezione: "tech",
  },
  {
    Id: 8,
    Nome: "paola",
    Cognome: "gatti",
    Sezione: "accounting",
  },
  {
    Id: 9,
    Nome: "sara",
    Cognome: "manunza",
    Sezione: "paghe",
  },
  {
    Id: 10,
    Nome: "carlotta",
    Cognome: "tronconi",
    Sezione: "sicurezza",
  },
];

const Home = () => {
  const [goodSticker, setGoodSticker] = useState(false);
  const [badSticker, setBadSticker] = useState(false);
  const [happySticker, setHappySticker] = useState(false);
  const [kissSticker, setKissSticker] = useState(false);
  const [millerObj, setMillerObj] = useState([]);
  const [millerNome, setMillerNome] = useState([]);
  const [millerCognome, setMillerCognome] = useState([]);
  const [searchNome, setSearchNome] = useState([]);
  const [searchCognome, setSearchCognome] = useState([]);
  const [errorNome, setErrorNome] = useState();
  const [errorCognome, setErrorCognome] = useState(false);

  const handleCheck = () => {
    verifyName(millerNome, millerCognome);
  };
  const goodStickerPop = () => {
    setGoodSticker(true);
    const timer = setTimeout(() => {
      setGoodSticker(false);
    }, 1000);
    return () => clearTimeout(timer);
  };
  const badStickerPop = () => {
    setBadSticker(true);
    const timer = setTimeout(() => {
      setBadSticker(false);
    }, 1000);
    return () => clearTimeout(timer);
  };
  const verifyName = (nomePersona, cognomePersona) => {
    //Controlllo
    if (nomePersona == "" && cognomePersona == "") {
      badStickerPop();
    } else {
      if (
        nomePersona[0].Nome === searchNome &&
        cognomePersona[0].Cognome === searchCognome &&
        nomePersona[0].Id === cognomePersona[0].Id
      ) {
        if (nomePersona[0].Id === 3) {
          setKissSticker(true);
          const timer = setTimeout(() => {
            setKissSticker(false);
          }, 1000);
          return () => clearTimeout(timer);
        } else {
          goodStickerPop();
        }
      } else {
        badStickerPop();
      }
    }
  };

  const handleChangeNome = (e) => {
    // filtro
    if (e.target.value == "") {
      setMillerNome(millerObj);
    } else {
      var millerX = []; // popolo l'array
      var i;
      for (i = 0; i < miller.length; i++) {
        if (
          miller[i].Nome.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          setSearchNome(e.target.value.toLowerCase());
          millerX.push(miller[i]);
        }
      }
      setMillerNome(millerX);

      /* Cambio colore Input Nome*/
      if (millerX == "") {
        setErrorNome(false);
      } else {
        setErrorNome(true);
      }

      /* Controllo Nome Uguale */
      if (millerX.length > 1) {
        console.log("doppio nome");
      }
    }
  };
  const handleChangeCognome = (e) => {
    // filtro
    if (e.target.value == "") {
      setMillerCognome(millerObj);
    } else {
      var millerX = []; // popolo l'array
      var i;
      for (i = 0; i < miller.length; i++) {
        if (
          miller[i].Cognome.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          setSearchCognome(e.target.value.toLowerCase());
          millerX.push(miller[i]);
        }
      }
      setMillerCognome(millerX);

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
      setMillerObj(miller);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="h-screen flex-col flex flex-wrap justify-center bg-black">
        <span className="block text-xl text-center font-medium text-slate-200 mb-10">
          Web App in costruzione...
        </span>
        <form className="flex flex-wrap align-middle w-full justify-center">
          <label className="text-center m-1 space-y-2">
            <span className="block text-2xl font-medium text-slate-500">
              Nome
            </span>
            <input
              style={{ borderColor: errorNome ? "green" : "red" }}
              className="rounded-md border-4 p-1 px-2 text-center focus:outline-none"
              onChange={handleChangeNome}
            />
          </label>
          <label className="text-center m-1 space-y-2">
            <span className="block text-2xl font-medium text-slate-500">
              Cognome
            </span>
            <input
              style={{ borderColor: errorCognome ? "green" : "red" }}
              className="rounded-md border-4 p-1 px-2 text-center focus:outline-none"
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
      </div>
      {/* Image container */}
      <div
        style={{
          display:
            goodSticker || badSticker || happySticker || kissSticker
              ? "flex"
              : "none",
        }}
        id="modal"
        className="hidden fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center"
      >
        <img
          style={{ display: goodSticker ? "flex" : "none" }}
          src={require("../images/good.webp")}
          alt=""
          className="max-w-[800px] max-h-[600px] object-cover"
        />
        <img
          style={{ display: badSticker ? "flex" : "none" }}
          src={require("../images/bad.webp")}
          alt=""
        />
        <img
          style={{ display: happySticker ? "flex" : "none" }}
          src={require("../images/happy.webp")}
          alt=""
        />
        <img
          style={{ display: kissSticker ? "flex" : "none" }}
          src={require("../images/kiss.webp")}
          alt=""
        />
      </div>
    </>
  );
};
export default Home;
