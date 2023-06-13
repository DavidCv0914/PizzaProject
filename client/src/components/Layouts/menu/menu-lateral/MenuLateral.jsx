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

  const setViewMenuCarne = () =>{
    context.setIngredientMenu("carnes")
  }

  const setViewMenuQueso = () =>{
    context.setIngredientMenu("quesos")
  }

  const setViewMenuSalsa= () =>{
    context.setIngredientMenu("salsas")
  }

  const setViewMenuVegetales = () =>{
    context.setIngredientMenu("vegetales")
  }

  const setViewMenuAderezos = () =>{
    context.setIngredientMenu("aderezos")
  }

  return (
    <div className="Cmenu-lateral">
      <div>
        <button onClick={setViewMenuPizza}>Pizza</button>
            {context.typePizzaMenu ? null :
            <div className="Cmenu-lateral__personalizada">
                <button onClick={setViewMenuCarne}>Carnes</button>
                <button onClick={setViewMenuQueso}>Quesos</button>
                <button onClick={setViewMenuSalsa}>Salsas</button>
                <button onClick={setViewMenuVegetales}>Vegetales</button>
                <button onClick={setViewMenuAderezos}>Aderezos</button>
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
