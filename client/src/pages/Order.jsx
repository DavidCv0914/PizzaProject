import React, { useState } from "react";

export const Order = () => {

  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  const handleSubmitMeats = (e) =>{
    e.preventDefault()
  }

  return (
    <>
      <h1>hellow world</h1>
      <section className="order-form">
      <form>
        
        <details>
          <summary>Carnes</summary>
        
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label>Pepperoni</label>
        
        <input
          type="checkbox"
          
        />
        <label>Jamón</label>
        
        <input
          type="checkbox"
          
        />
        <label>Salchicha</label>
        
        <input
          type="checkbox"
          
        />
        <label>Tocino</label>
        
        <input
          type="checkbox"
          
        />
        <label>Pollo</label>
        
        <input
          type="checkbox"
          
        />
        <label>Carne Molida</label>
        
        <input
          type="checkbox"
          
        />
        <label>Salami</label>
        
        <input
          type="checkbox"
          
        />
        <label>Chorizo</label>
        
        <input
          type="checkbox"
          
        />
        <label>Carne Molida</label>
        
        <input
          type="checkbox"
          
        />
        
        <label>Prosciutto</label>
        </details>
        <button onSubmit={handleSubmitMeats}>Checar</button>
      </form>

      <form>
        <h3>Queso</h3>{/*1*/}
        {/*2*/}
        <label>Mozarella</label>
        <input
          type="checkbox"
          
        />
        <label>Parmesano</label>
        <input
          type="checkbox"
          
        />
        <label>Cheddar</label>
        <input
          type="checkbox"
          
        />
        <label>Feta</label>
        <input
          type="checkbox"
          
        />
        <label>Cabra</label>
        <input
          type="checkbox"
          
        />
        <label>Ricotta</label>
        <input
          type="checkbox"
          
        />
        <label>Gorgonzola</label>
        <input
          type="checkbox"
          
        />
        <label>Azul</label>
        <input
          type="checkbox"
          
        />
      </form>
      
      <form>
      <h3>Vegetales</h3>{/*3*/}
        <label>Champiñones</label>
        <input
          type="checkbox"
          
        />
        <label>Pimiento verde</label>
        <input
          type="checkbox"
          
        />
        <label>Maiz</label>
        <input
          type="checkbox"
          
        />
        <label>Cebolla</label>
        <input
          type="checkbox"
          
        />
        <label>Tomate</label>
        <input
          type="checkbox"
          
        />
        <label>Espinacas</label>
        <input
          type="checkbox"
          
        />
        <label>Piña</label>
        <input
          type="checkbox"
          
        />
        <label>Tomates secos</label>
        <input
          type="checkbox"
          
        />
      </form>
      
      <form>
      <h3>Salsas</h3>{/*2*/}
        <label>Salsa de tomate</label>
        <input
          type="checkbox"
          
        />
        <label>Salsa BBQ</label>
        <input
          type="checkbox"
          
        />
        <label>Salsa Alfredo</label>
        <input
          type="checkbox"
          
        />
        <label>Salsa pesto</label>
        <input
          type="checkbox"
          
        />
        <label>Salsa Ranchera</label>
        <input
          type="checkbox"
          
        />
        <label>Salsa de ajo</label>
        <input
          type="checkbox"
          
        />
      </form>

      <form>
      <h3>Aderezos</h3>{/*3*/}
      <label>Orégano</label>
        <input
          type="checkbox"
          
        />
        <label>Albaca</label>
        <input
          type="checkbox"
          
        />
        <label>Perejil</label>
        <input
          type="checkbox"
          
        />
        <label>Pimienta negra</label>
        <input
          type="checkbox"
          
        />
        <label>Sal</label>
        <input
          type="checkbox"
          
        />
        <label>Ajo picado</label>
        <input
          type="checkbox"
          
        />
      </form>
      </section>
    </>
  );
};
