import { useState, useEffect } from "react";

const Fare = ({ fare, handleUpdatesFares }) => {
  const [hours, setHours] = useState('');
   
  useEffect( () => {
      console.log(1);
    if(hours && hours > 0)
        handleUpdatesFares(fare, Number(hours));
  }, [hours] )

  return(
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl mb-5">
        <label className="block text-gray-700 font-bold">Tarifa bloque {fare[0]+1}: </label>
        <input 
            type="number"
            placeholder="Horas a cobrar"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={hours}
            onChange={ (e) => setHours(e.target.value) } 
            />
    </div>
  )
}

export default Fare;