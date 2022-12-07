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
    Foto: "Federica-Ferrari.png"
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
    Foto: "Marina-Cormio.png"
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
    Foto: "Stefania-Scarpulla.png"
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
    Foto: "Federica-Ferrari.png"
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
    Foto: "Marina-Cormio.png"
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
    Foto: "Stefania-Scarpulla.png"
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
  const [nomeValue, setNomeValue] = useState([]);
  const [cognomeValue, setCognomeValue] = useState([]);
  const [imgCasuale, setImgCasuale] = useState(null);
  const [personChoosen, setPersonChoosen] = useState([]);
  const [guess,setGuess] = useState(0);
  const [total,setTotal] = useState(0);
const [counterController,setCounterController] = useState(true)
  const [counter, setCounter] = useState(0);

  useEffect(() =>{
      if(counterController){
          setTimeout(()=>setCounter(counter +1), 1000);
      }
  },[counter]);

  const segnaRisultato = async() =>{
try{
  let responseCliente = await api.post('classifica',{ris:{Punteggio:guess,Tempo:counter,Utente:sessionStorage.getItem('usernameMillerGames')}}, )
}catch{

}


  }



  const handleValueNome = (e) => {
    handleChangeNome(e)
    setNomeValue(e.target.value.toLowerCase());
  };
  const handleValueCognome = (e) => {
    handleChangeCognome(e)

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
    if(nome === personChoosen.Nome && cognome === personChoosen.Cognome){
      //goodStickerPop()
setGuess(guess+1)
    }else{
      //badStickerPop();
    }

setTotal(total+1)

if(total+1 === 15){
  setCounterController(false)
  segnaRisultato();
  return
}

    setNomeValue("")
    setCognomeValue("")
    setMillers(millers.filter(m=>m.Id !== personChoosen.Id))
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
    let choosen= obj[Math.floor(Math.random()*obj.length)]
    console.log(choosen.Cognome)
    try {
      require(`../images/pics/${choosen.Cognome}.png`)
      console.log("OK")
       setImgCasuale(choosen.Cognome)
     } catch (err) {
      cognomiRandom(obj)
     }
   
    setPersonChoosen(choosen)

    setUpdated(true);
  };
  const imgCreator=()=>{
    cognomiRandom(millers);
  }
  useEffect(() => {
    const fetchData = async () => {
      //const millerImg= miller.filter((elm)=> elm.Foto !== undefined)
      imgCreator()
    };
    fetchData();
  }, [millers]);

  return (
    <>
      <div className="flex-col flex flex-wrap justify-center bg-gradient-to-br from-[#262A73] to-[#060044] p-2 pt-4 w-full h-screen">
      <div className="w-50 h-50 absolute top-2 left-2">
          <button
            style={{ color: "white" }}
            onClick={() => navigate("/home")}
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
        <span className="" style={{display:total >= 15?"None":""}}>Indovina il Nome e il Cognome</span>
        <span className="" style={{display:total >= 15?"None":""}}>{counter + " " +(total>0?guess+"/"+total:"")}</span>
        
        <h1 style={{display:total >= 15?"":"None"}}>{guess+"/"+total}</h1>
        <div style={{display:total >=15?"None":""}} className="mt-2 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 mx-10">
        <div className="group relative ">
        {imgCasuale ? (<div className="relative h-60 w-60 overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 mx-auto">
        <img src={require(`../images/pics/${imgCasuale}.png`)} className="h-full w-full object-cover object-center " />
          </div>): (
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <img className="h-full w-full object-cover object-center " />
            </div>
          )}
        </div>
        </div>
        <form className="flex flex-wrap align-middle w-full justify-center" style={{display:total >= 15?"None":""}}>
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
            Avanti
          </button>
        </div>
      </div>

   
    </>
  );
};

export default Foto;

