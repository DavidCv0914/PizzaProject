import React from 'react'
import { MenuMenu } from '../components/Layouts/menu/menu-menu/MenuMenu'
import { MenuLateral } from '../components/Layouts/menu/menu-lateral/MenuLateral'
import { Nav } from "../components/Layouts/header/Nav";

export const Order1 = () => {
  return (
  <>
    <Nav/>
    <div className="main">
        <MenuMenu/>
        <MenuLateral/>
    </div>
  </>
  )
}
