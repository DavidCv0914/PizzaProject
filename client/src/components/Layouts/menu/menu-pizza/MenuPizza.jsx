import React,{ useState,useEffect,useContext } from 'react'
import { contextPage } from "../../../../context/context";
import { getMenu,getMenuSize } from "../../../../api/api";

export const MenuPizza = () => {

  let context = useContext(contextPage);

  const [listPizzas,setListPizzas] = useState([]);
  useEffect(()=>{
    const loadMenu = async() =>{
      if (context.typePizzaMenu) {
        if (context.sizeSelect == "") {
          const response = await getMenu();
          setListPizzas(response.data)
        }else{
          const response = await getMenuSize(context.sizeSelect);
          setListPizzas(response.data)
        }
      }else{
        
      }
    }
    loadMenu()
  },[context.sizeSelect]);
console.log(listPizzas);
  return (

       
       <div className="Cmenu-pizza">
       {listPizzas.length > 0 ? 
       listPizzas.map((pizzas)=>(
        <section className="Cmenu-card" key={pizzas.id_pizza}>
        <div className="Cmenu-card__img">
        <img src={pizzas.img} alt="" />
        </div>
        <div className="Cmenu-card__info">
          <h2>{pizzas.sabor}</h2>
          <p>$ {pizzas.precio}</p>
          <p>tamaño: {pizzas.tamaño}</p>
          <p>{pizzas.description}</p>
          <button>Agregar</button>
        </div>
       </section>
          
       )) : null}
      
          
          
        
          {/* <section className="Cmenu-card">
            <div className="Cmenu-card__img">
            <img src="https://res.cloudinary.com/dtit8udfs/image/upload/v1686233256/pizzaaa_o4uyjl.png" alt="" />
            </div>
            <div className="Cmenu-card__info">
              <h2>Pepperoni</h2>
              <p>$ 32.000</p>
              <p>Salsa de Tomate, Queso Mozzarella y Rodajas delgadas de Pepperoni</p>
              <button>Agregar</button>
            </div>
          </section>
          <section className="Cmenu-card">
            <div className="Cmenu-card__img">
            <img src="https://res.cloudinary.com/dtit8udfs/image/upload/v1686225143/pizzazz_vyg77m.png" alt="" />
            </div>
            <div className="Cmenu-card__info">
              <h2>Carnes</h2>
              <p>$ 32.000</p>
              <p>Salsa de Tomate, Queso Derretido, Jamón, Salchicha, Tocino, Carne de Res y Pollo</p>
              <button>Agregar</button>
            </div>
          </section>
          <section className="Cmenu-card">
            <div className="Cmenu-card__img">
            <img src="https://res.cloudinary.com/dtit8udfs/image/upload/v1686233265/pizza_9_erwqw4.png" alt="" />
            </div>
            <div className="Cmenu-card__info">
              <h2>BBQ</h2>
              <p>$ 32.000</p>
              <p>Salsa Barbacoa, Queso Mozzarella, Pollo Desmenuzado y Cebolla</p>
              <button>Agregar</button>
            </div>
          </section>
          <section className="Cmenu-card">
            <div className="Cmenu-card__img">
            <img src="https://res.cloudinary.com/dtit8udfs/image/upload/v1686233267/pizza_8_qsrexf.png" alt="" />
            </div>
            <div className="Cmenu-card__info">
              <h2>Pollo Champiñones</h2>
              <p>$ 32.000</p>
              <p>Salsa de Tomate, Queso Mozzarella, Pollo Desmenuzado y Champiñones Frescos</p>
              <button>Agregar</button>
            </div>
          </section>
          <section className="Cmenu-card">
            <div className="Cmenu-card__img">
            <img src="https://res.cloudinary.com/dtit8udfs/image/upload/v1686233279/pizza_3_hhigr1.png" alt="" />
            </div>
            <div className="Cmenu-card__info">
              <h2>Criolla</h2>
              <p>$ 32.000</p>
              <p>Salsa de Tomate, Queso Mozzarella, Jamón, Salchichas, Cebolla, Maíz Dulce, Tomate y Aceitunas</p>
              <button>Agregar</button>
            </div>
          </section>
          <section className="Cmenu-card">
            <div className="Cmenu-card__img">
            <img src="https://res.cloudinary.com/dtit8udfs/image/upload/v1686233263/pizza_10_qzpw51.png" alt="" />
            </div>
            <div className="Cmenu-card__info">
              <h2>Ranchera</h2>
              <p>$ 32.000</p>
              <p>Salsa de Tomate, Queso Mozzarella, Pollo Desmenuzado, Chorizo, Cebolla, Tomate, Pimiento y Especias</p>
              <button>Agregar</button>
            </div>
          </section>
          <section className="Cmenu-card">
            <div className="Cmenu-card__img">
            <img src="https://res.cloudinary.com/dtit8udfs/image/upload/v1686233282/pizza_2_hfl5le.png" alt="" />
            </div>
            <div className="Cmenu-card__info">
              <h2>Cuatro Quesos</h2>
              <p>$ 32.000</p>
              <p>Queso Mozzarella, Queso Gorgonzola, Queso Parmesano, Queso de Cabra</p>
              <button>Agregar</button>
            </div>
          </section>
          <section className="Cmenu-card">
            <div className="Cmenu-card__img">
            <img src="https://res.cloudinary.com/dtit8udfs/image/upload/v1686233270/pizza_6_s83jdj.png" alt="" />
            </div>
            <div className="Cmenu-card__info">
              <h2>Vegetariana</h2>
              <p>$ 32.000</p>
              <p>Queso Mozzarella, Pimientos, Cebolla, Champiñones, Tomate, Aceitunas, Espinacas y Maiz Dulce</p>
              <button>Agregar</button>
            </div>
          </section>
          <section className="Cmenu-card">
            <div className="Cmenu-card__img">
            <img src="https://res.cloudinary.com/dtit8udfs/image/upload/v1686233274/pizza_5_dtqdvn.png" alt="" />
            </div>
            <div className="Cmenu-card__info">
              <h2>Napolitana</h2>
              <p>$ 32.000</p>
              <p>Salsa de Tomate, Queso Mozzarella, Aceite de Oliva, Ajo y Albahaca</p>
              <button>Agregar</button>
            </div>
          </section>
          <section className="Cmenu-card">
            <div className="Cmenu-card__img">
            <img src="https://res.cloudinary.com/dtit8udfs/image/upload/v1686225143/pizzazz_vyg77m.png" alt="" />
            </div>
            <div className="Cmenu-card__info">
              <h2>Mexicana</h2>
              <p>$ 32.000</p>
              <p>Salsa de Tomate, Queso Mozzarella, Carne Molida, Jalapeños, Cebolla, Pimientos, Tomate y Maíz Dulce</p>
              <button>Agregar</button>
            </div>
          </section> 
        </div> */}
         </div>
  )
}
