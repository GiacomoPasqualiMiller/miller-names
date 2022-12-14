import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import api from "./api/api";
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
    Id: 67,
    Nome: "giacomo",
    Cognome: "pasquali",
    Sezione: "tech",
  },
];
const millerBackup = [
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
  const [millers, setMillers] = useState(miller);
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
  const [nomeValue, setNomeValue] = useState("");
  const [cognomeValue, setCognomeValue] = useState("");
  const [imgCasuale, setImgCasuale] = useState(null);
  const [personChoosen, setPersonChoosen] = useState([]);
  const [guess, setGuess] = useState(0);
  const [result, setResult] = useState("bg-[#262A73]");
  const [total, setTotal] = useState(0);
  const [counterController, setCounterController] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counterController) {
      setTimeout(() => setCounter(counter + 1), 1000);
    }
  }, [counter]);

  const segnaRisultato = async () => {
    try {
      let responseCliente = await api.post("classifica", {
        ris: {
          Punteggio: guess,
          Tempo: counter,
          Utente: sessionStorage.getItem("usernameMillerGames"),
        },
      });
    } catch {}
  };

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
    console.log(nome, cognome);
    console.log(personChoosen.Nome,personChoosen.Cognome)
    if (
      nome.replace(/\s/g, "") === personChoosen.Nome.replace(/\s/g, "") &&
      cognome.replace(/\s/g, "") === personChoosen.Cognome.replace(/\s/g, "")
    ) {
      //goodStickerPop()
      setGuess(guess + 1);
      setResult("bg-[#2bb00d]");
      setTimeout(() => {
        setResult("bg-[#262A73]");
      }, 500);
    } else {
      setResult("bg-[#ff0000]");
      setTimeout(() => {
        setResult("bg-[#262A73]");
      }, 500);
      //badStickerPop();
    }

    setTotal(total + 1);

    if (total + 1 === 10) {
      setCounterController(false);
      segnaRisultato();
      return;
    }

    setNomeValue("");
    setCognomeValue("");
    setMillers(millers.filter((m) => m.Id !== personChoosen.Id));
  
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
      /* Cambio colore Input Cognome*/
      if (millerX == "") {
        setErrorCognome(false);
      } else {
        setErrorCognome(true);
      }
    }
  };
  const cognomiRandom = (obj) => {
    let indx = Math.floor(Math.random() * obj.length)
    let choosen = obj[indx];
    try {
      require(`../images/pics/${choosen.Cognome}.png`);
      setPersonChoosen(choosen);
    } catch (err) {
      cognomiRandom(obj);
    }

    

    setUpdated(true);
  };
  const imgCreator = () => {
    cognomiRandom(millers);
  };
  useEffect(() => {
    const fetchData = async () => {
      //const millerImg= miller.filter((elm)=> elm.Foto !== undefined)
      imgCreator();
    };
    fetchData();
  }, [millers]);

const restart = () =>{

  setTotal(0);
  setMillers(millerBackup)
}

  useEffect(()=>
  {
    setImgCasuale(personChoosen?.Cognome);
  },[personChoosen])
  document.addEventListener("touchstart", handleTouchStart, false); //bind & fire - evento di inizio tocco
  document.addEventListener("touchmove", handleTouchMove, false); // bind & fire - evento di movimento durante il tocco
  var xDown = null;
  var yDown = null;
  function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
  }
  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    } //nessun movimento
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*Trovo quello più significativo sulle assi X e Y*/
      if (xDiff > 0) {
        /* swipe sinistra */
        console.log("Swipe SINISTRA");
        handleCheck()
      } else {
        /* swipe destra */
        console.log("Swipe DESTRA");
      } //right
    } else {
      if (yDiff > 0) {
        /* swipe alto */
        console.log("Swipe ALTO");
      } else {
        /* swipe basso */
        console.log("Swipe BASSO");
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }
  //Gesture
  return (
    <>
   
      <div className="snow flex-col flex flex-wrap justify-center bg-gradient-to-br from-[#262A73] to-[#060044] p-2 pt-4 w-full h-screen">
        <div
          className="w-full flex justify-between mb-10 px-3 row font-semibold"
          style={{ display: total >= 10 ? "None" : "" }}
        >
          <div className="bg-[#262A73] rounded-lg w-1/3 justify-center flex flex-wrap p-2 shadow-white shadow-md animate-bounce">
            <h1 className="text-white w-full text-center">TIMER</h1>
            <span className="font-normal">{counter + " "}</span>
          </div>
          <div
            className={`${result} rounded-lg w-1/3 justify-center flex flex-wrap p-2 shadow-white shadow-md`}
          >
            <h1 className="text-white w-full text-center">PUNTEGGIO</h1>
            <span className="font-normal">
              {total > 0 ? guess + "/" + total : "0/0"}
            </span>
          </div>
        </div>

        {/* TOTALE */}
        <div style={{ display: total >= 10 ? "" : "None" }}>
          <div className="w-full bg-[#262A73] flex flex-wrap justify-center p-5 h-60 rounded-lg">
            <h1 className="text-center text-white text-6xl my-auto ">
              <span className="font-bold w-full text-2xl mb-3">
                IL TUO PUNTEGGIO È:
              </span>{" "}
              {guess + "/" + total}
            </h1>
          </div>
          <div className="flex w-full p-4 mt-4 ">
            <button
              onClick={() => restart()}
              className="bg-[#262A73] shadow-white shadow-md rounded-md p-3 text-2xl text-white font-semibold uppercase mx-auto"
            >
              gioca ancora
            </button>
          </div>
        </div>

        <div style={{ display: total >= 10 ? "None" : "" }} className="mb-1 ">
          <div className="group relative ">
            {imgCasuale ? (
              <div className="relative h-2/3 w-2/3 overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-2/3 mx-auto">
                <img
                  src={require(`../images/pics/${imgCasuale}.png`)}
                  className="h-full w-full object-cover object-center "
                />
              </div>
            ) : (
              <div className="relative h-2/3 w-2/3 overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64">
                <img className="h-full w-full object-cover object-center " />
              </div>
            )}
          </div>
        </div>
        <form
          className="flex flex-wrap align-middle w-2/3 mx-auto justify-center"
          style={{ display: total >= 10 ? "None" : "" }}
        >
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
        <div
          className="flex mx-auto p-4 mt-4"
          style={{ display: total >= 10 ? "None" : "" }}
        >
          <button
            onClick={() => handleCheck()}
            className="bg-[#262A73] shadow-white shadow-md rounded-md p-3 text-2xl text-white font-semibold uppercase "
          >
            Avanti
          </button>
        </div>
      </div>
    </>
  );
};

export default Foto;
