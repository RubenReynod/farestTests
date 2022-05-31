import { useState } from "react";

const Fares = ({fares}) => {
  const [hours, setHours] = useState('');
  const [updatedFares, setUpdatedFares] = useState(fares);
  const [montoTotal, setMontoTotal] = useState(0);

  const getMonto = () =>{
    setMontoTotal( () => updatedFares.reduce( (total, fare) => {
      const [nBlock, tarifa, minutes, , next] = fare;
      const m = hours*60;
      const repeat = hours==0?0:Math.ceil(m / minutes);
      let t = total + (tarifa * repeat);
      
      if(nBlock == next)
        t += tarifa * repeat;
       
      return t;
    },0))
  }  

  return(
    <>
      <label className="block text-gray-700 font-bold">Horas a cobrar: </label>
        <input 
            type="number"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md mb-5"
            value={hours}
            onChange={ (e) => setHours(e.target.value) } 
            />

      <p className="text-gray-700 font-bold mb-5">Monto total: <span className="font-normal">$ {montoTotal}</span></p>
      <button 
        type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded"
        onClick={getMonto}>Obtener Monto
      </button>
    </>
  )
}

export default Fares;