import React,{ useState,useEffect,useContext  } from 'react'
import { getMenuSoda,getMenuSodaAll,getMenuSodaSize, getMenuSodaType } from "../../../../api/api";
import { contextPage } from "../../../../context/context";

export const MenuGaseosa = () => {

  const context = useContext(contextPage);

  const [sodas,setSodas] = useState([]);

useEffect(()=>{
  if (context.sizeSelectSoda == "" && context.sizeSelectSodaType == "") {
    const loadMenu = async()=>{
    const response = await getMenuSoda()
    setSodas(response.data)
    }
    loadMenu()
  }else if(context.sizeSelectSoda != "" && context.sizeSelectSodaType == ""){
    const loadMenu = async()=>{
      const response = await getMenuSodaSize(context.sizeSelectSoda)
      setSodas(response.data)
      }
      loadMenu()
  }else if(context.sizeSelectSoda == "" && context.sizeSelectSodaType != ""){
      const loadMenu = async()=>{
      const response = await getMenuSodaType(context.sizeSelectSodaType)
      setSodas(response.data)
      }
      loadMenu()
  }else{
    const loadMenu = async()=>{
      const response = await getMenuSodaAll(context.sizeSelectSodaType,context.sizeSelectSoda
        )
      setSodas(response.data)
      }
      loadMenu()
  }
  
},[context.sizeSelectSoda,context.sizeSelectSodaType])

  return (
    <div className="Cmenu-gaseosa">
      
        {sodas.map((soda)=>(
          <section className="Cmenu-card" key={soda.id_bebida}>
            <div className="Cmenu-card__img">
            <img src={soda.img} alt="" />
            </div>
            <div className="Cmenu-card__info">
              <h2>{soda.nombre}</h2>
              <p>{soda.tamaño}</p>
              <p>{soda.tipo}</p>
              <p>$ {soda.precio}</p>
              <button>Agregar</button>
            </div>
          </section>
        )) }
    </div>
  )
}
