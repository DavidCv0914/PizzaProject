import React,{ useContext } from 'react'
import { contextPage } from "../../../../context/context";
import { Aderezos } from './aderezos/Aderezos'
import { Carnes } from "./carnes/Carnes";
import { Vegetales } from "./vegetales/Vegetales";
import { Salsas } from "./salsas/Salsas";
import { Quesos } from "./quesos/Quesos";

export const MenuPizzaPersonal = () => {

  let context = useContext(contextPage);

  const menu = () =>{
    switch (context.ingredientMenu) {
      case "carnes":
        return <Carnes/>
        break;
      case "quesos":
        return <Quesos/>
        break;
      case "salsas":
        return <Salsas/>
        break;
      case "vegetales":
        return <Vegetales/>
        break;
      case "aderezos":
        return <Aderezos/>
        break;
      default:
        break;
    }
  }

  return (
    <div className="Cmenu-personal">
      {menu()}
    </div>
  )
}
