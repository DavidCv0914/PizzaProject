import React, { useState } from "react";

export const Order = () => {

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const [isChecked8, setIsChecked8] = useState(false);
  const [isChecked9, setIsChecked9] = useState(false);
  const [isChecked10, setIsChecked10] = useState(false);
  const [validateForm1, setValidateForm1] = useState(false);

  function handleCheckboxChange1() {
    setIsChecked1(!isChecked1);
  }

  function handleCheckboxChange2() {
    setIsChecked2(!isChecked2);
  }

  function handleCheckboxChange3() {
    setIsChecked3(!isChecked3);
  }

  function handleCheckboxChange4() {
    setIsChecked4(!isChecked4);
  }

  function handleCheckboxChange5() {
    setIsChecked5(!isChecked5);
  }

  function handleCheckboxChange6() {
    setIsChecked6(!isChecked6);
  }

  function handleCheckboxChange7() {
    setIsChecked7(!isChecked7);
  }

  function handleCheckboxChange8() {
    setIsChecked8(!isChecked8);
  }

  function handleCheckboxChange9() {
    setIsChecked9(!isChecked9);
  }

  function handleCheckboxChange10() {
    setIsChecked10(!isChecked10);
  }
  const handleSubmitMeats = (e) =>{
    e.preventDefault();
    let arayCheked = [isChecked1,isChecked2,isChecked3,isChecked4,isChecked5,isChecked6,isChecked7,isChecked8,isChecked9,isChecked10]
    let validate = []
    for (let i = 0; i < 10; i++) {
      if (arayCheked[i]) {
        validate.push(arayCheked[1])
      }
    }
    
    if (validate.length > 2 ) {
      alert("No puede poner mas de dos ingredientes")
    }else if( validate.length == 0){
      alert("tiene que poner al menos un ingrediente")
    }else{
      alert("validado")
    }
  }

  return (
    <>
      <section className="order-form">
      <form onSubmit={handleSubmitMeats}>
        
        <details>
          <summary>Carnes</summary>
        
        <input
          type="checkbox"
          checked={isChecked1}
          onChange={handleCheckboxChange1}
        />
        <label>Pepperoni</label>
        
        <input
          type="checkbox"
          checked={isChecked2}
          onChange={handleCheckboxChange2}
        />
        <label>Jamón</label>
        
        <input
          type="checkbox"
          checked={isChecked3}
          onChange={handleCheckboxChange3}
        />
        <label>Salchicha</label>
        
        <input
          type="checkbox"
          checked={isChecked4}
          onChange={handleCheckboxChange4}
        />
        <label>Tocino</label>
        
        <input
          type="checkbox"
          checked={isChecked5}
          onChange={handleCheckboxChange5}
        />
        <label>Pollo</label>
        
        <input
          type="checkbox"
          checked={isChecked6}
          onChange={handleCheckboxChange6}
        />
        <label>Carne Molida</label>
        
        <input
          type="checkbox"
          checked={isChecked7}
          onChange={handleCheckboxChange7}
        />
        <label>Salami</label>
        
        <input
          type="checkbox"
          checked={isChecked8}
          onChange={handleCheckboxChange8}
        />
        <label>Chorizo</label>
        
        <input
          type="checkbox"
          checked={isChecked9}
          onChange={handleCheckboxChange9}
        />
        <label>Carne Molida</label>
        
        <input
          type="checkbox"
          checked={isChecked10}
          onChange={handleCheckboxChange10}
        />
        
        <label>Prosciutto</label>
        </details>
        <button>Checar</button>
      </form>

      <form>
        <h3>Queso</h3>{/*2*/}
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
