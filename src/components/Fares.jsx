import { useState } from "react";
import Fare from "./Fare";

const Fares = ({fares}) => {
  const [updatedFares, setUpdatedFares] = useState(fares);
  const [montoTotal, setMontoTotal] = useState(0);

  const handleUpdatesFares = (fare, hours) => {
      
    const [noBlock, fate, minutes, , next] = fare;
    
    const m = hours*60;
    const newRepeat = Math.ceil(m / minutes);
    const newFare = [ noBlock, fate, minutes, newRepeat, next ];
    
    if(updatedFares.find( ([n,,,,]) => n == noBlock )){
      // Edit Fare
      const UF = updatedFares.map( f => f[0] === noBlock?newFare:f  );
      setUpdatedFares(UF);
    }
  }

  const getMonto = () =>{
    setMontoTotal( () => updatedFares.reduce( (total, fare) => {
      const [nBlock, tarifa, , repeat, next] = fare;
      let t = total + (tarifa * repeat);
      
      if(nBlock == next)
        t += tarifa * repeat;
       
      return t;
    },0) )
  }  

  return(
    <>
      {fares.map(fare => (
          <Fare key={fare[0]} fare={fare} handleUpdatesFares={handleUpdatesFares} />
      ))}
      <p className="text-gray-700 font-bold mb-5">Monto total: <span className="font-normal">{montoTotal}</span></p>
      <button 
        type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded"
        onClick={getMonto}>Obtener Monto
      </button>
    </>
  )
}

export default Fares;