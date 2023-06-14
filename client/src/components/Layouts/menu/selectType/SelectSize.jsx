import React,{useContext} from 'react';
import { contextPage } from "../../../../context/context";

export const SelectSize = () => {

    let context = useContext(contextPage);

    const handleOnchange = (e) =>{
        context.setSizeSelect(e.target.value)
    }

  return (
    <div>
        <select name="tamaño" onChange={handleOnchange}>
                <option selected disabled>Elija un tamaño de pizza</option>
                {context.typePizzaMenu ? <option value="">Todas</option> : null}
                <option value="pequeña">Pequeña</option>
                <option value="mediana">Mediana</option>
                <option value="grande">Grande</option>
                <option value="extragrande">Extragrande</option>
        </select>
    </div>
  )
}
