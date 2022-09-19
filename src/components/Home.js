import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const miller = [
  {
    Id: 100,
    Nome: "giacomo",
    Cognome: "pasquali",
    Sezione: "tech",
    Foto: "jack.webp",
  },
  {
    Id: 1,
    Nome: "alessandro",
    Cognome: "miesi",
    Sezione: "tech",
    Foto: "bradipo.png",
  },
  {
    Id: 2,
    Nome: "federico",
    Cognome: "barenghi",
    Sezione: "tech",
    Foto: "fede.webp",
  },
  {
    Id: 4,
    Nome: "william",
    Cognome: "piccione",
    Sezione: "tech",
    Foto: "piccione.png",
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
    Nome: "rosi",
    Cognome: "oliveira",
    Sezione: "tech",
  },
  {
    Id: 9,
    Nome: "paul",
    Cognome: "renda",
    Sezione: "tech",
  },
  {
    Id: 10,
    Nome: "paola",
    Cognome: "gatti",
    Sezione: "accounting",
  },
  {
    Id: 11,
    Nome: "federica",
    Cognome: "ferrari",
    Sezione: "accounting",
  },
  {
    Id: 12,
    Nome: "marina",
    Cognome: "galliena",
    Sezione: "accounting",
  },
  {
    Id: 13,
    Nome: "marina",
    Cognome: "cormio",
    Sezione: "accounting",
  },
  {
    Id: 14,
    Nome: "arianna",
    Cognome: "rozza",
    Sezione: "accounting",
  },
  {
    Id: 15,
    Nome: "stefania",
    Cognome: "scarpulla",
    Sezione: "accounting",
  },
  {
    Id: 16,
    Nome: "luana",
    Cognome: "visco",
    Sezione: "accounting",
  },
  {
    Id: 18,
    Nome: "monica",
    Cognome: "zuffellato",
    Sezione: "accounting",
  },
  {
    Id: 19,
    Nome: "jessica",
    Cognome: "vanin",
    Sezione: "accounting",
  },
  {
    Id: 20,
    Nome: "sara",
    Cognome: "manunza",
    Sezione: "paghe",
  },
  {
    Id: 21,
    Nome: "graziella",
    Cognome: "negroni",
    Sezione: "paghe",
  },
  {
    Id: 22,
    Nome: "claudia",
    Cognome: "de paoli",
    Sezione: "paghe",
  },
  {
    Id: 23,
    Nome: "chiara",
    Cognome: "lapegna",
    Sezione: "paghe",
  },
  {
    Id: 24,
    Nome: "claudia",
    Cognome: "ganini",
    Sezione: "paghe",
  },
  {
    Id: 25,
    Nome: "michela",
    Cognome: "coltelli",
    Sezione: "paghe",
  },
  {
    Id: 26,
    Nome: "barbara",
    Cognome: "baroni",
    Sezione: "paghe",
  },
  {
    Id: 27,
    Nome: "chiara",
    Cognome: "gismondi",
    Sezione: "paghe",
  },
  {
    Id: 28,
    Nome: "cinzia",
    Cognome: "pancallo",
    Sezione: "paghe",
  },
  {
    Id: 29,
    Nome: "grazia",
    Cognome: "giammusso",
    Sezione: "paghe",
  },
  {
    Id: 30,
    Nome: "valentina",
    Cognome: "bellinzoni",
    Sezione: "paghe",
  },
  {
    Id: 31,
    Nome: "giovanna",
    Cognome: "lamacchia",
    Sezione: "paghe",
  },
  {
    Id: 32,
    Nome: "nicole",
    Cognome: "alessandri",
    Sezione: "paghe",
  },
  {
    Id: 33,
    Nome: "rossella",
    Cognome: "semenza",
    Sezione: "paghe",
  },
  {
    Id: 34,
    Nome: "alessandra",
    Cognome: "muzzin",
    Sezione: "paghe",
  },
  {
    Id: 35,
    Nome: "simona",
    Cognome: "nassi",
    Sezione: "paghe",
  },
  {
    Id: 36,
    Nome: "laura",
    Cognome: "balestrieri",
    Sezione: "paghe",
  },
  {
    Id: 37,
    Nome: "angela",
    Cognome: "tolentino",
    Sezione: "paghe",
  },
  {
    Id: 38,
    Nome: "silvia",
    Cognome: "cantarelli",
    Sezione: "paghe",
  },
  {
    Id: 39,
    Nome: "alessandra",
    Cognome: "zecca",
    Sezione: "paghe",
  },
  {
    Id: 40,
    Nome: "cristina",
    Cognome: "ladie",
    Sezione: "paghe",
  },
  {
    Id: 41,
    Nome: "daniela",
    Cognome: "zoppi",
    Sezione: "paghe",
  },
  {
    Id: 42,
    Nome: "jessica",
    Cognome: "bianchini",
    Sezione: "paghe",
  },
  {
    Id: 43,
    Nome: "giulia",
    Cognome: "salvatore",
    Sezione: "paghe",
  },
  {
    Id: 44,
    Nome: "alison",
    Cognome: "maraschi",
    Sezione: "paghe",
  },
  {
    Id: 45,
    Nome: "alessio",
    Cognome: "ferrario",
    Sezione: "paghe",
  },
  {
    Id: 46,
    Nome: "dario",
    Cognome: "mazzola",
    Sezione: "paghe",
  },
  {
    Id: 47,
    Nome: "roberta",
    Cognome: "mazzola",
    Sezione: "paghe",
  },
  {
    Id: 48,
    Nome: "diego",
    Cognome: "albergoni",
    Sezione: "paghe",
  },
  {
    Id: 49,
    Nome: "alessandra",
    Cognome: "sperti",
    Sezione: "accounting",
  },
  {
    Id: 50,
    Nome: "lorenzo",
    Cognome: "alfieri",
    Sezione: "accounting",
  },
  {
    Id: 51,
    Nome: "elena",
    Cognome: "ligorio",
    Sezione: "accounting",
  },
  {
    Id: 52,
    Nome: "chiara",
    Cognome: "monachino",
    Sezione: "accounting",
  },
  {
    Id: 53,
    Nome: "katia",
    Cognome: "capasso",
    Sezione: "accounting",
  },
  {
    Id: 54,
    Nome: "carlotta",
    Cognome: "tronconi",
    Sezione: "sicurezza",
  },
  {
    Id: 55,
    Nome: "andrea",
    Cognome: "gandaglia",
    Sezione: "sicurezza",
    Foto: "ganda.png",
  },
  {
    Id: 56,
    Nome: "laura",
    Cognome: "archeri",
    Sezione: "sicurezza",
  },
  {
    Id: 57,
    Nome: "sonali",
    Cognome: "fernando",
    Sezione: "sicurezza",
  },
  {
    Id: 58,
    Nome: "stefania",
    Cognome: "arena",
    Sezione: "sicurezza",
  },
  {
    Id: 59,
    Nome: "katherin",
    Cognome: "machuca",
    Sezione: "sicurezza",
  },
  {
    Id: 60,
    Nome: "luca",
    Cognome: "caffi",
    Sezione: "sicurezza",
  },
  {
    Id: 61,
    Nome: "matteo",
    Cognome: "caraffini",
    Sezione: "sicurezza",
  },
  {
    Id: 62,
    Nome: "andrea",
    Cognome: "tarchini",
    Sezione: "sicurezza",
  },
  {
    Id: 63,
    Nome: "francesca",
    Cognome: "corradi",
    Sezione: "sicurezza",
  },
  {
    Id: 64,
    Nome: "chiara",
    Cognome: "teresi",
    Sezione: "sicurezza",
  },
  {
    Id: 65,
    Nome: "raffaele",
    Cognome: "de vecchi",
    Sezione: "sicurezza",
  },
  {
    Id: 3000,
    Nome: "andrea ilaria",
    Cognome: "leoni",
    Sezione: "tech",
    Foto: "kiss.webp",
  },
];

const Home = () => {
  const [goodSticker, setGoodSticker] = useState(false);
  const [badSticker, setBadSticker] = useState(false);
  const [millerObj, setMillerObj] = useState([]);
  const [millerNome, setMillerNome] = useState([]);
  const [millerCognome, setMillerCognome] = useState([]);
  const [searchNome, setSearchNome] = useState([]);
  const [searchCognome, setSearchCognome] = useState([]);
  const [errorNome, setErrorNome] = useState();
  const [errorCognome, setErrorCognome] = useState(false);
  const [imgPop, setImgPop] = useState();
  const [timerPop, setTimerPop] = useState(false);

  const handleCheck = () => {
    verifyName(millerCognome);
  };
  const goodStickerPop = (cognomeSelect) => {
    const x = { ...cognomeSelect };
    x[0].Foto = "good.webp";
    setImgPop(x[0].Foto);
    setTimerPop(true);
    const timer = setTimeout(() => {
      setTimerPop(false);
    }, 2000);
    reloadPage();
  };
  const badStickerPop = () => {
    const x = { Foto: "bad.webp" };
    setImgPop(x.Foto);
    setTimerPop(true);
    const timer = setTimeout(() => {
      setTimerPop(false);
    }, 2000);
    reloadPage();
  };
  const reloadPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 500);
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
        reloadPage();
      }
    }
    reloadPage();
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
      setMillerObj(miller);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex-col flex flex-wrap justify-center bg-black p-2 pt-4">
        <h1 className="text-white text-center text-4xl font-bold">
          MILLER NAMES
        </h1>
        <NameGame rightAnswer={goodStickerPop} badAnswer={badStickerPop} />
        <SurnameGame rightAnswer={goodStickerPop} badAnswer={badStickerPop} />
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
export default Home;

const NameGame = (props) => {
  const [cognomeCasuale, setCognomeCasuale] = useState([]);
  const [nomeValue, setNomeValue] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [count, setCount] = useState(0);

  localStorage.setItem("nomi_indovinati", count);
  const handleChange = (e) => {
    setNomeValue(e.target.value.toLowerCase());
  };
  const verifyName = (e) => {
    if (nomeValue === miller[cognomeCasuale].Nome) {
      setCount(count + 1);
    } else {
      props.badAnswer();
    }
    cognomiRandom();
    setNomeValue("");
  };
  const cognomiRandom = (e) => {
    const len = miller.length;
    setCognomeCasuale(Math.floor(Math.random() * len));
    setUpdated(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      cognomiRandom();
    };
    fetchData();
  }, []);
  return (
    <>
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
              value={miller[cognomeCasuale].Cognome}
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
      <div className="flex mx-auto p-4">
        <button
          onClick={verifyName}
          className="bg-green-600 rounded-md p-2 text-white font-bold uppercase shadow-md"
        >
          controlla!
        </button>
      </div>
    </>
  );
};
/* Indovina il cognome */
const SurnameGame = (props) => {
  const [nomeCasuale, setNomeCasuale] = useState([]);
  const [cognomeValue, setCognomeValue] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [count, setCount] = useState(0);

  localStorage.setItem("cognomi_indovinati", count);

  const handleChange = (e) => {
    setCognomeValue(e.target.value.toLowerCase());
    console.log(miller[nomeCasuale]);
  };
  const verifyName = (e) => {
    if (cognomeValue === miller[nomeCasuale].Cognome) {
      setCount(count + 1);
    } else {
      props.badAnswer();
    }
    nomiRandom();
    setCognomeValue("");
  };
  const nomiRandom = (e) => {
    const len = miller.length;
    setNomeCasuale(Math.floor(Math.random() * len));
    setUpdated(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      nomiRandom();
    };
    fetchData();
  }, []);
  return (
    <>
      <span className=" mt-10">Indovina il Cognome</span>
      <span className="font-bold text-2xl">
        {localStorage.getItem("cognomi_indovinati")}
      </span>
      <form className="flex flex-wrap align-middle w-full justify-center">
        <label className="text-center m-1 space-y-2">
          <span className="block text-2xl font-medium text-slate-500">
            Nome
          </span>
          {/* aspetto il caricamento del valore causale cognome */}
          {updated ? (
            <input
              disabled
              value={miller[nomeCasuale].Nome}
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
            Cognome
          </span>
          <input
            value={cognomeValue}
            onChange={handleChange}
            className="capitalize rounded-md border-4 p-1 px-2 text-center focus:outline-none"
          />
        </label>
      </form>
      <div className="flex mx-auto p-4">
        <button
          onClick={verifyName}
          className="bg-green-600 rounded-md p-2 text-white font-bold uppercase shadow-md"
        >
          controlla!
        </button>
      </div>
    </>
  );
};
