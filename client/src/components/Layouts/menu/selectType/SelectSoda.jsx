import React, { useContext } from "react";
import { contextPage } from "../../../../context/context";

export const SelectSoda = () => {
  let context = useContext(contextPage);

  const handleOnchangeSize = (e) => {
    context.setSizeSelectSoda(e.target.value);
  };

  const handleOnchangeType = (e) => {
    context.setSizeSelectSodaType(e.target.value);
  };

  return (
    <>
    <div>
      <select name="tamaño" onChange={handleOnchangeType}>
        <option selected disabled>
          Elija el tipo de bebida
        </option>
        <option value="">todos los tipos</option>
        <option value="gaseosa">Gaseosa</option>
        <option value="te">Té</option>
        <option value="cerveza">Cerveza</option>
        <option value="agua">Agua</option>
        <option value="jugo natural">Jugo natural</option>
        <option value="jugo artificial">Jugo artificial</option>
      </select>
    </div>
    <div>
      <select name="tamaño" onChange={handleOnchangeSize}>
        <option selected disabled>
          Elija tamaño de la bebida
        </option>
        <option value="">todos los tamaños</option>
        <option value="200ml">200ml</option>
        <option value="250ml">250ml</option>
        <option value="350ml">350ml</option>
        <option value="500ml">500ml</option>
        <option value="1 litro">1 Litro</option>
        <option value="2 litros">2 Litros</option>
      </select>
    </div>
    </>
  );
};
