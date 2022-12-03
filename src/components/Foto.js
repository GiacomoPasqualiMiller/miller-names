import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import imgTest from "../images/pics/Marina-Cormio.png";
const miller = [
  {
    Id: 1,
    Nome: "alessandro",
    Cognome: "miesi",
    Sezione: "tech",
  },
  {
    Id: 2,
    Nome: "federico",
    Cognome: "barenghi",
    Sezione: "tech",
    Foto: "Federico-Barenghi.png",
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
    Foto: "Martina-Rosti.png",
  },
  {
    Id: 6,
    Nome: "mattia",
    Cognome: "pavesi",
    Sezione: "tech",
    Foto: "Mattia-Pavesi.png",
  },
  {
    Id: 7,
    Nome: "ian",
    Cognome: "cavenaghi",
    Sezione: "tech",
    Foto: "cavenaghi.png",
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
    Foto: "Federica-Ferrari.png",
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
    Foto: "Marina-Cormio.png",
  },
  {
    Id: 14,
    Nome: "arianna",
    Cognome: "rozza",
    Sezione: "accounting",
    Foto: "Arianna-Rozza.png",
  },
  {
    Id: 15,
    Nome: "stefania",
    Cognome: "scarpulla",
    Sezione: "accounting",
    Foto: "Stefania-Scarpulla.png",
  },
  {
    Id: 16,
    Nome: "luana",
    Cognome: "visco",
    Sezione: "accounting",
    Foto: "Luana-Visco.png",
  },
  {
    Id: 18,
    Nome: "monica",
    Cognome: "zuffellato",
    Sezione: "accounting",
    Foto: "Monica-Zuffellato.png",
  },
  {
    Id: 19,
    Nome: "jessica",
    Cognome: "vanin",
    Sezione: "accounting",
    Foto: "Jessica-Vanin.png",
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
    Foto: "Valentina-Mercuri.png",
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
    Foto: "Elena-Ligorio.png",
  },
  {
    Id: 52,
    Nome: "chiara",
    Cognome: "monachino",
    Sezione: "accounting",
    Foto: "Chiara-Monachino.png",
  },
  {
    Id: 53,
    Nome: "katia",
    Cognome: "capasso",
    Sezione: "accounting",
    Foto: "Katia-Capasso.png",
  },
  {
    Id: 54,
    Nome: "carlotta",
    Cognome: "tronconi",
    Sezione: "sicurezza",
    Foto: "Carlotta-Tronconi.png",
  },
  {
    Id: 55,
    Nome: "andrea",
    Cognome: "gandaglia",
    Sezione: "sicurezza",
    Foto: "Andrea-Gandaglia.png",
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
    Foto: "Sonali-Fernando.png",
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
    Foto: "Kathrin-Machuca.png",
  },
  {
    Id: 60,
    Nome: "luca",
    Cognome: "caffi",
    Sezione: "sicurezza",
    Foto: "Luca-Caffi.png",
  },
  {
    Id: 61,
    Nome: "matteo",
    Cognome: "caraffini",
    Sezione: "sicurezza",
    Foto: "Matteo-Caraffini.png",
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
    Foto: "Chiara-Teresi.png",
  },
  {
    Id: 65,
    Nome: "raffaele",
    Cognome: "de vecchi",
    Sezione: "sicurezza",
  },
  {
    Id: 66,
    Nome: "andrea ilaria",
    Cognome: "leoni",
    Sezione: "tech",
  },
  {
    Id: 67,
    Nome: "giacomo",
    Cognome: "pasquali",
    Sezione: "tech",
    Foto: "Giacomo-Pasquali.png",
  },
  {
    Id: 68,
    Nome: "greta",
    Cognome: "cacciabue",
    Sezione: "accounting",
    Foto: "Greta-Cacciabue.png",
  },
];

const Foto = () => {
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
  const [imgCasuale, setImgCasuale] = useState([]);
  const [personChoosen, setPersonChoosen] = useState([]);
  const handleValueNome = (e) => {
    handleChangeNome(e);
    setNomeValue(e.target.value.toLowerCase());
  };
  const handleValueCognome = (e) => {
    handleChangeCognome(e);

    setCognomeValue(e.target.value.toLowerCase());
  };
  const handleCheck = () => {
    verifyName(nomeValue, cognomeValue);
  };
  const goodStickerPop = () => {
    setImgPop("good.webp");
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
  const verifyName = (nome, cognome) => {
    if (nome === personChoosen.Nome && cognome === personChoosen.Cognome) {
      goodStickerPop();
    } else {
      badStickerPop();
    }
    setNomeValue("");
    setCognomeValue("");
    imgCreator();
    //Controlllo
    /* if (cognomeSelect == "") {
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
    } */
    setNomeValue("");
    setCognomeValue("");
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
  const cognomiRandom = (obj) => {
    let choosen = obj[Math.floor(Math.random() * obj.length)];
    console.log(choosen);
    setImgCasuale(choosen.Foto);
    setPersonChoosen(choosen);
    setUpdated(true);
  };
  const imgCreator = () => {
    const millerImg = miller.filter((elm) => elm.Foto !== undefined);
    console.log(millerImg);
    setMillers(millerImg);
    cognomiRandom(millerImg);
  };
  useEffect(() => {
    const fetchData = async () => {
      imgCreator();
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
        <div className="mb-1">
          <div className="group relative ">
            {updated ? (
              <div className="relative h-2/3 w-2/3 overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-2/3 mx-auto">
                <img
                  src={require(`../images/pics/${imgCasuale}`)}
                  className="h-full w-full object-cover object-center "
                />
              </div>
            ) : (
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64">
                <img className="h-full w-full object-cover object-center " />
              </div>
            )}
          </div>
        </div>
        <form className="flex flex-wrap align-middle w-2/3 mx-auto justify-center">
          <label className="text-center my-1 w-full space-y-2">
            <input
              placeholder="Nome"
              value={nomeValue}
              className="rounded-md border-4 p-1 px-0 text-center w-full capitalize focus:outline-none"
              onChange={handleValueNome}
            />
          </label>
          <label className="text-center my-1 w-full space-y-2">
            <input
              placeholder="Cognome"
              value={cognomeValue}
              className="rounded-md border-4 p-1 text-center px-0 w-full capitalize focus:outline-none"
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
      {timerPop ? (
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
      ) : (
        ""
      )}
    </>
  );
};

export default Foto;
