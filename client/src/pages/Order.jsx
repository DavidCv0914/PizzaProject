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
  const [isCheckedQueso1, setIsCheckedQueso1] = useState(false);
  const [isCheckedQueso2, setIsCheckedQueso2] = useState(false);
  const [isCheckedQueso3, setIsCheckedQueso3] = useState(false);
  const [isCheckedQueso4, setIsCheckedQueso4] = useState(false);
  const [isCheckedQueso5, setIsCheckedQueso5] = useState(false);
  const [isCheckedQueso6, setIsCheckedQueso6] = useState(false);
  const [isCheckedQueso7, setIsCheckedQueso7] = useState(false);
  const [isCheckedQueso8, setIsCheckedQueso8] = useState(false);
  const [validateForm2, setValidateForm2] = useState(false);
  const [isCheckedVegetales1, setIsCheckedVegetales1] = useState(false);
  const [isCheckedVegetales2, setIsCheckedVegetales2] = useState(false);
  const [isCheckedVegetales3, setIsCheckedVegetales3] = useState(false);
  const [isCheckedVegetales4, setIsCheckedVegetales4] = useState(false);
  const [isCheckedVegetales5, setIsCheckedVegetales5] = useState(false);
  const [isCheckedVegetales6, setIsCheckedVegetales6] = useState(false);
  const [isCheckedVegetales7, setIsCheckedVegetales7] = useState(false);
  const [isCheckedVegetales8, setIsCheckedVegetales8] = useState(false);
  const [validateForm3, setValidateForm3] = useState(false);

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
      setValidateForm1(false)
    }else if( validate.length == 0){
      alert("tiene que poner al menos un ingrediente")
      setValidateForm1(false)
    }else{
      alert("validado")
      setValidateForm1(true)
    }
  }

  function handleCheckboxChangeQueso1() {
    setIsCheckedQueso1(!isCheckedQueso1);
  }

  function handleCheckboxChangeQueso2() {
    setIsCheckedQueso2(!isCheckedQueso2);
  }

  function handleCheckboxChangeQueso3() {
    setIsCheckedQueso3(!isCheckedQueso3);
  }

  function handleCheckboxChangeQueso4() {
    setIsCheckedQueso4(!isCheckedQueso4);
  }

  function handleCheckboxChangeQueso5() {
    setIsCheckedQueso5(!isCheckedQueso5);
  }

  function handleCheckboxChangeQueso6() {
    setIsCheckedQueso6(!isCheckedQueso6);
  }

  function handleCheckboxChangeQueso7() {
    setIsCheckedQueso7(!isCheckedQueso7);
  }

  function handleCheckboxChangeQueso8() {
    setIsCheckedQueso8(!isCheckedQueso8);
  }

  const handleSubmitQueso = (e) =>{
    e.preventDefault();
    let arayCheked = [isCheckedQueso1,isCheckedQueso2,isCheckedQueso3,isCheckedQueso4,isCheckedQueso5,isCheckedQueso6,isCheckedQueso7,isCheckedQueso8]
    let validate = []
    for (let i = 0; i < 10; i++) {
      if (arayCheked[i]) {
        validate.push(arayCheked[1])
      }
    }
    
    if (validate.length > 2 ) {
      setValidateForm2(false)
      alert("No puede poner mas de dos ingredientes")
      
    }else if( validate.length == 0){
      setValidateForm2(false)
      alert("tiene que poner al menos un ingrediente")
      
    }else{
      alert("validado")
      setValidateForm2(true)
    }
  }


  function handleCheckboxChangeVegetales1() {
    setIsCheckedVegetales1(!isCheckedVegetales1);
  }

  function handleCheckboxChangeVegetales2() {
    setIsCheckedVegetales2(!isCheckedVegetales2);
  }

  function handleCheckboxChangeVegetales3() {
    setIsCheckedVegetales3(!isCheckedVegetales3);
  }

  function handleCheckboxChangeVegetales4() {
    setIsCheckedVegetales4(!isCheckedVegetales4);
  }

  function handleCheckboxChangeVegetales5() {
    setIsCheckedVegetales5(!isCheckedVegetales5);
  }

  function handleCheckboxChangeVegetales6() {
    setIsCheckedVegetales6(!isCheckedVegetales6);
  }

  function handleCheckboxChangeVegetales7() {
    setIsCheckedVegetales7(!isCheckedVegetales7);
  }

  function handleCheckboxChangeVegetales8() {
    setIsCheckedVegetales8(!isCheckedVegetales8);
  }

  const handleSubmitVegetales = (e) =>{
    e.preventDefault();
    let arayCheked = [isCheckedVegetales1,isCheckedVegetales2,isCheckedVegetales3,isCheckedVegetales4,isCheckedVegetales5,isCheckedVegetales6,isCheckedVegetales7,isCheckedVegetales8]
    let validate = []
    for (let i = 0; i < 10; i++) {
      if (arayCheked[i]) {
        validate.push(arayCheked[1])
      }
    }
    
    if (validate.length > 3 ) {
      setValidateForm3(false)
      alert("No puede poner mas de tres ingredientes")
      
    }else if( validate.length == 0){
      setValidateForm3(false)
      alert("tiene que poner al menos un ingrediente")
      
    }else{
      alert("validado")
      setValidateForm3(true)
    }
  }
  console.log(validateForm3);
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

      <form onSubmit={handleSubmitQueso}>
        <h3>Queso</h3>{/*2*/}
        <label>Mozarella</label>
        <input
          type="checkbox"
          checked={isCheckedQueso1}
          onChange={handleCheckboxChangeQueso1}
        />
        <label>Parmesano</label>
        <input
          type="checkbox"
          checked={isCheckedQueso2}
          onChange={handleCheckboxChangeQueso2}
        />
        <label>Cheddar</label>
        <input
          type="checkbox"
          checked={isCheckedQueso3}
          onChange={handleCheckboxChangeQueso3}
        />
        <label>Feta</label>
        <input
          type="checkbox"
          checked={isCheckedQueso4}
          onChange={handleCheckboxChangeQueso4}
        />
        <label>Cabra</label>
        <input
          type="checkbox"
          checked={isCheckedQueso5}
          onChange={handleCheckboxChangeQueso5}
        />
        <label>Ricotta</label>
        <input
          type="checkbox"
          checked={isCheckedQueso6}
          onChange={handleCheckboxChangeQueso6}
        />
        <label>Gorgonzola</label>
        <input
          type="checkbox"
          checked={isCheckedQueso7}
          onChange={handleCheckboxChangeQueso7}
        />
        <label>Azul</label>
        <input
          type="checkbox"
          checked={isCheckedQueso8}
          onChange={handleCheckboxChangeQueso8}
        />
        <button>Checar</button>
      </form>
      
      <form onSubmit={handleSubmitVegetales}>
      <h3>Vegetales</h3>{/*3*/}
        <label>Champiñones</label>
        <input
          type="checkbox"
          checked={isCheckedVegetales1}
          onChange={handleCheckboxChangeVegetales1}
        />
        <label>Pimiento verde</label>
        <input
          type="checkbox"
          checked={isCheckedVegetales2}
          onChange={handleCheckboxChangeVegetales2}
        />
        <label>Maiz</label>
        <input
          type="checkbox"
          checked={isCheckedVegetales3}
          onChange={handleCheckboxChangeVegetales3}
        />
        <label>Cebolla</label>
        <input
          type="checkbox"
          checked={isCheckedVegetales4}
          onChange={handleCheckboxChangeVegetales4}
        />
        <label>Tomate</label>
        <input
          type="checkbox"
          checked={isCheckedVegetales5}
          onChange={handleCheckboxChangeVegetales5}
        />
        <label>Espinacas</label>
        <input
          type="checkbox"
          checked={isCheckedVegetales6}
          onChange={handleCheckboxChangeVegetales6}
        />
        <label>Piña</label>
        <input
          type="checkbox"
          checked={isCheckedVegetales7}
          onChange={handleCheckboxChangeVegetales7}
        />
        <label>Tomates secos</label>
        <input
          type="checkbox"
          checked={isCheckedVegetales8}
          onChange={handleCheckboxChangeVegetales8}
        />
        <button>Checar</button>
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
