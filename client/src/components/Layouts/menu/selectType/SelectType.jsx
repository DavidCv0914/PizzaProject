import React,{ useContext } from 'react'
import { contextPage } from "../../../../context/context";

export const SelectType = () => {

let context = useContext(contextPage);

const typeMenuOriginal = () =>{
  context.setTypePizzaMenu(true)
}

const typeMenuPersonal = () =>{
  context.setTypePizzaMenu(false)
}

  return (
    <div className="Cmenu-selectType">
        <button onClick={typeMenuOriginal}>Original</button>
        <button onClick={typeMenuPersonal}>Personal</button>
    </div>
  )
}
