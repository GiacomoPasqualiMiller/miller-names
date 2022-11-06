import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Cognome = (props) => {
    const [nomeCasuale, setNomeCasuale] = useState([]);
    const [cognomeValue, setCognomeValue] = useState([]);
    const [millers, setMillers] = useState([]);
    const [updated, setUpdated] = useState(false);
    const [count, setCount] = useState(0);
    
    localStorage.setItem("cognomi_indovinati", count);
  
    const handleChange = (e) => {
      setCognomeValue(e.target.value.toLowerCase());
      console.log(millers[nomeCasuale]);
    };
    const verifyName = (e) => {
      if (cognomeValue === millers[nomeCasuale].Cognome) {
        setCount(count + 1);
        props.rightAnswer()
      } else {
        props.badAnswer();
      }
      nomiRandom();
      setCognomeValue("");
    };
    const nomiRandom = () => {
      setNomeCasuale(Math.floor(Math.random() * 67));
      setUpdated(true);
    };
    useEffect(() => {
      const fetchData = async () => {
        nomiRandom();
        setMillers(props.millers)
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
                value={millers[nomeCasuale].Nome}
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

  export default Cognome