import { useState, useEffect } from "react";

const Fares = ({fares}) => {
  const [arrFares] = useState(fares);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [montoTotal, setMontoTotal] = useState(0);

  const handleMonto = () => {
      const fisrt = arrFares[0]

      setMontoTotal(0);
      getMonto(fisrt, minutes);
  }

  useEffect(() => {
    setMinutes(hours*60);
  },[hours])

  const getMonto = (block, minutes, total=0, end=false) => {
      console.log(total, end);
    const [, tar, min, rep, next] = block;
    if(end){
        setMontoTotal(total);
        return;
    }
    
    let repeat = Math.ceil(minutes/min)
        repeat = repeat > rep?rep:repeat;
    let m = min * repeat;
    const t = total + (tar * repeat),
          newMin = minutes - m;

    
    if(minutes > 0 && !end)
       getMonto(arrFares[next], newMin, t, newMin <= 0); 
  }  

  return(
    <>
      <label className="block text-gray-700 font-bold">Horas a cobrar: </label>
        <input 
            type="number"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
            value={hours}
            onChange={ (e) => setHours(Number(e.target.value)) } 
            />

      <p className="text-gray-700 font-bold mb-5">Monto total: <span className="font-normal">$ {montoTotal}</span></p>
      <button 
        type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded"
        onClick={handleMonto}>Obtener Monto
      </button>
    </>
  )
}

export default Fares;