import React,{ useContext } from "react";
import { contextPage } from "../../../../context/context";

export const MenuLateral = () => {

  let context = useContext(contextPage);

  const setViewMenuPizza = () =>{
    context.setViewMenu("pizza")
  }

  const setViewMenuBebida = () =>{
    context.setViewMenu("bebida")
  }

  const setViewMenuAdicional = () =>{
    context.setViewMenu("adicional")
  }

  return (
    <div className="Cmenu-lateral">
      <div>
        <button onClick={setViewMenuPizza}>Pizza</button>
            {context.typePizzaMenu ? null :
            <div className="Cmenu-lateral__personalizada">
                <button>Carnes</button>
                <button>Quesos</button>
                <button>Salsas</button>
                <button>Vegetales</button>
                <button>Aderezos</button>
            </div>}
        <button onClick={setViewMenuBebida}>Bebidas</button>
        <button onClick={setViewMenuAdicional}>Adicionales</button>
      </div>
      <div>
        <button>Comprar</button>
      </div>
    </div>
  );
};
