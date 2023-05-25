import React, { useState,useContext } from "react";
import { contextPage } from "../context/context";

export const Order = () => {

  let context = useContext(contextPage);

  const [validateForm5, setValidateForm5] = useState(false);
  const [validateForm4, setValidateForm4] = useState(false);
  const [validateForm3, setValidateForm3] = useState(false);
  const [validateForm2, setValidateForm2] = useState(false);
  const [validateForm1, setValidateForm1] = useState(false);

  const handleSubmitMeats = (e) =>{
    e.preventDefault();
    let arayCheked = [context.isChecked1,context.isChecked2,context.isChecked3,context.isChecked4,context.isChecked5,context.isChecked6,context.isChecked7,context.isChecked8,context.isChecked9,context.isChecked10]
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

  const handleSubmitQueso = (e) =>{
    e.preventDefault();
    let arayCheked = [context.isCheckedQueso1,context.isCheckedQueso2,context.isCheckedQueso3,context.isCheckedQueso4,context.isCheckedQueso5,context.isCheckedQueso6,context.isCheckedQueso7,context.isCheckedQueso8]
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
  
  const handleSubmitVegetales = (e) =>{
    e.preventDefault();
    let arayCheked = [context.isCheckedVegetales1,context.isCheckedVegetales2,context.isCheckedVegetales3,context.isCheckedVegetales4,context.isCheckedVegetales5,context.isCheckedVegetales6,context.isCheckedVegetales7,context.isCheckedVegetales8]
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

  const handleSubmitSalsas = (e) =>{
    e.preventDefault();
    let arayCheked = [context.isCheckedSalsas1,context.isCheckedSalsas2,context.isCheckedSalsas3,context.isCheckedSalsas4,context.isCheckedSalsas5,context.isCheckedSalsas6]
    let validate = []
    for (let i = 0; i < 10; i++) {
      if (arayCheked[i]) {
        validate.push(arayCheked[1])
      }
    }
    
    if (validate.length > 2 ) {
      setValidateForm4(false)
      alert("No puede poner mas de dos ingredientes")
      
    }else if( validate.length == 0){
      setValidateForm4(false)
      alert("tiene que poner al menos un ingrediente")
      
    }else{
      alert("validado")
      setValidateForm4(true)
    }
  }

  const handleSubmitAderezos = (e) =>{
    e.preventDefault();
    let arayCheked = [context.isCheckedAderezos1,context.isCheckedAderezos2,context.isCheckedAderezos3,context.isCheckedAderezos4,context.isCheckedAderezos5,context.isCheckedAderezos6]
    let validate = []
    for (let i = 0; i < 10; i++) {
      if (arayCheked[i]) {
        validate.push(arayCheked[1])
      }
    }
    
    if (validate.length > 2 ) {
      setValidateForm5(false)
      alert("No puede poner mas de dos ingredientes")
      
    }else if( validate.length == 0){
      setValidateForm5(false)
      alert("tiene que poner al menos un ingrediente")
      
    }else{
      alert("validado")
      setValidateForm5(true)
    }
  }
  console.log(validateForm4);
  return (
    <>
      <section className="order-form">
      <form onSubmit={handleSubmitMeats}>
        
        <details>
          <summary>Carnes</summary>
        
        <input
          type="checkbox"
          checked={context.isChecked1}
          onChange={context.handleCheckboxChange1}
        />
        <label>Pepperoni</label>
        
        <input
          type="checkbox"
          checked={context.isChecked2}
          onChange={context.handleCheckboxChange2}
        />
        <label>Jamón</label>
        
        <input
          type="checkbox"
          checked={context.isChecked3}
          onChange={context.handleCheckboxChange3}
        />
        <label>Salchicha</label>
        
        <input
          type="checkbox"
          checked={context.isChecked4}
          onChange={context.handleCheckboxChange4}
        />
        <label>Tocino</label>
        
        <input
          type="checkbox"
          checked={context.isChecked5}
          onChange={context.handleCheckboxChange5}
        />
        <label>Pollo</label>
        
        <input
          type="checkbox"
          checked={context.isChecked6}
          onChange={context.handleCheckboxChange6}
        />
        <label>Carne Molida</label>
        
        <input
          type="checkbox"
          checked={context.isChecked7}
          onChange={context.handleCheckboxChange7}
        />
        <label>Salami</label>
        
        <input
          type="checkbox"
          checked={context.isChecked8}
          onChange={context.handleCheckboxChange8}
        />
        <label>Chorizo</label>
        
        <input
          type="checkbox"
          checked={context.isChecked9}
          onChange={context.handleCheckboxChange9}
        />
        <label>Carne Molida</label>
        
        <input
          type="checkbox"
          checked={context.isChecked10}
          onChange={context.handleCheckboxChange10}
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
          checked={context.isCheckedQueso1}
          onChange={context.handleCheckboxChangeQueso1}
        />
        <label>Parmesano</label>
        <input
          type="checkbox"
          checked={context.isCheckedQueso2}
          onChange={context.handleCheckboxChangeQueso2}
        />
        <label>Cheddar</label>
        <input
          type="checkbox"
          checked={context.isCheckedQueso3}
          onChange={context.handleCheckboxChangeQueso3}
        />
        <label>Feta</label>
        <input
          type="checkbox"
          checked={context.isCheckedQueso4}
          onChange={context.handleCheckboxChangeQueso4}
        />
        <label>Cabra</label>
        <input
          type="checkbox"
          checked={context.isCheckedQueso5}
          onChange={context.handleCheckboxChangeQueso5}
        />
        <label>Ricotta</label>
        <input
          type="checkbox"
          checked={context.isCheckedQueso6}
          onChange={context.handleCheckboxChangeQueso6}
        />
        <label>Gorgonzola</label>
        <input
          type="checkbox"
          checked={context.isCheckedQueso7}
          onChange={context.handleCheckboxChangeQueso7}
        />
        <label>Azul</label>
        <input
          type="checkbox"
          checked={context.isCheckedQueso8}
          onChange={context.handleCheckboxChangeQueso8}
        />
        <button>Checar</button>
      </form>
      
      <form onSubmit={handleSubmitVegetales}>
      <h3>Vegetales</h3>{/*3*/}
        <label>Champiñones</label>
        <input
          type="checkbox"
          checked={context.isCheckedVegetales1}
          onChange={context.handleCheckboxChangeVegetales1}
        />
        <label>Pimiento verde</label>
        <input
          type="checkbox"
          checked={context.isCheckedVegetales2}
          onChange={context.handleCheckboxChangeVegetales2}
        />
        <label>Maiz</label>
        <input
          type="checkbox"
          checked={context.isCheckedVegetales3}
          onChange={context.handleCheckboxChangeVegetales3}
        />
        <label>Cebolla</label>
        <input
          type="checkbox"
          checked={context.isCheckedVegetales4}
          onChange={context.handleCheckboxChangeVegetales4}
        />
        <label>Tomate</label>
        <input
          type="checkbox"
          checked={context.isCheckedVegetales5}
          onChange={context.handleCheckboxChangeVegetales5}
        />
        <label>Espinacas</label>
        <input
          type="checkbox"
          checked={context.isCheckedVegetales6}
          onChange={context.handleCheckboxChangeVegetales6}
        />
        <label>Piña</label>
        <input
          type="checkbox"
          checked={context.isCheckedVegetales7}
          onChange={context.handleCheckboxChangeVegetales7}
        />
        <label>Tomates secos</label>
        <input
          type="checkbox"
          checked={context.isCheckedVegetales8}
          onChange={context.handleCheckboxChangeVegetales8}
        />
        <button>Checar</button>
      </form>
      
      <form onSubmit={handleSubmitSalsas}>
      <h3>Salsas</h3>{/*2*/}
        <label>Salsa de tomate</label>
        <input
          type="checkbox"
          checked={context.isCheckedSalsas1}
          onChange={context.handleCheckboxChangeSalsas1}
        />
        <label>Salsa BBQ</label>
        <input
          type="checkbox"
          checked={context.isCheckedSalsas2}
          onChange={context.handleCheckboxChangeSalsas2}
        />
        <label>Salsa Alfredo</label>
        <input
          type="checkbox"
          checked={context.isCheckedSalsas3}
          onChange={context.handleCheckboxChangeSalsas3}
        />
        <label>Salsa pesto</label>
        <input
          type="checkbox"
          checked={context.isCheckedSalsas4}
          onChange={context.handleCheckboxChangeSalsas4}
        />
        <label>Salsa Ranchera</label>
        <input
          type="checkbox"
          checked={context.isCheckedSalsas5}
          onChange={context.handleCheckboxChangeSalsas5}
        />
        <label>Salsa de ajo</label>
        <input
          type="checkbox"
          checked={context.isCheckedSalsas6}
          onChange={context.handleCheckboxChangeSalsas6}
        />
        <button>Checar</button>
      </form>

      <form onSubmit={handleSubmitAderezos}>
      <h3>Aderezos</h3>{/*3*/}
      <label>Orégano</label>
        <input
          type="checkbox"
          checked={context.isCheckedAderezos1}
          onChange={context.handleCheckboxChangeAderezos1}
        />
        <label>Albaca</label>
        <input
          type="checkbox"
          checked={context.isCheckedAderezos2}
          onChange={context.handleCheckboxChangeAderezos2}
        />
        <label>Perejil</label>
        <input
          type="checkbox"
          checked={context.isCheckedAderezos3}
          onChange={context.handleCheckboxChangeAderezos3}
        />
        <label>Pimienta negra</label>
        <input
          type="checkbox"
          checked={context.isCheckedAderezos4}
          onChange={context.handleCheckboxChangeAderezos4}
        />
        <label>Sal</label>
        <input
          type="checkbox"
          checked={context.isCheckedAderezos5}
          onChange={context.handleCheckboxChangeAderezos5}
        />
        <label>Ajo picado</label>
        <input
          type="checkbox"
          checked={context.isCheckedAderezos6}
          onChange={context.handleCheckboxChangeAderezos6}
        />
        <button>Checar</button>
      </form>
      </section>
    </>
  );
};
