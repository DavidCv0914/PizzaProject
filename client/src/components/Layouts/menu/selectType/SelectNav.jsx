import React,{useContext} from 'react'
import { SelectSoda } from './SelectSoda'
import { SelectType } from './SelectType'
import { contextPage } from "../../../../context/context";
import { SelectSize } from "./SelectSize";

export const SelectNav = () => {

  let context = useContext(contextPage);

  const select = () =>{
    switch (context.viewMenu) {
      case "pizza":
        return (
          <>
        <SelectType/>
        <SelectSize/>
        </>)
      case "bebida":
          return <SelectSoda/>
      default:
        break;
    }
  }

  return (
    <div className="select-nav">
      {select()}
    </div>
  )
}
