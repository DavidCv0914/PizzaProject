import React,{ useContext } from 'react'
import { MenuPizza } from '../menu-pizza/MenuPizza'
import { MenuGaseosa } from '../menu-gaseosa/MenuGaseosa'
import { SelectNav } from '../selectType/SelectNav'
import { MenuAdicional } from '../menu-adicional/MenuAdicional'
import { contextPage } from "../../../../context/context";
// import { Order } from "../../../../pages/Order";
import { MenuPizzaPersonal } from '../menu-pizza-personal/MenuPizzaPersonal'

export const MenuMenu = () => {

  let context = useContext(contextPage);

  const typePizza = () =>{
    if (context.typePizzaMenu) {
      return <MenuPizza/>
    }else{
      return <MenuPizzaPersonal/>
    }
  }

  const viewMenu = () => {
    
    switch (context.viewMenu) {
      case "pizza":
        return typePizza()
        break;
      case "bebida":
        return <MenuGaseosa/>
        break;
      case "adicional":
        return <MenuAdicional/>
        break;
      default:
        break;
    }
  }

  return (
    <div className="Cmenu">
      <SelectNav/>
      {viewMenu()}
    </div>
  )
}
