import React from 'react'
import { MenuPizza } from '../menu-pizza/MenuPizza'
import { MenuGaseosa } from '../menu-gaseosa/MenuGaseosa'
import { SelectNav } from '../selectType/SelectNav'
import { MenuAdicional } from '../menu-adicional/MenuAdicional'

export const MenuMenu = () => {
  return (
    <div className="Cmenu">
      <SelectNav/>
      <MenuPizza/>
      <MenuGaseosa/>
      <MenuAdicional/>
    </div>
  )
}
