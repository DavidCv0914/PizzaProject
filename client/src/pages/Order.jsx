import React, { useState, useContext } from "react";
import { contextPage } from "../context/context";

export const Order = () => {
  let context = useContext(contextPage);

  const [validateForm7, setValidateForm7] = useState(false);
  const [validateForm6, setValidateForm6] = useState(false);
  const [validateForm5, setValidateForm5] = useState(false);
  const [validateForm4, setValidateForm4] = useState(false);
  const [validateForm3, setValidateForm3] = useState(false);
  const [validateForm2, setValidateForm2] = useState(false);
  const [validateForm1, setValidateForm1] = useState(false);
  const [nameSoda,setNameSoda] = useState("")
  const [typeSoda,setTypeSoda] = useState("")
  const [sizeSoda,setSizeSoda] = useState("")
  const [costSoda,setCostSoda] = useState(0)
  const [size,setSize] =useState("");
  const [cost,setCost] = useState(0);
  
  const handleOnchangeNameSoda = (e) =>{
    setNameSoda(e.target.value)
  }

  const handleOnchangeSizeSoda = (e) =>{
    setSizeSoda(e.target.value)
  }
        
  const nameSodaForm = () =>{
    if (typeSoda == "gaseosa") {
      return (
      
      <select onChange={handleOnchangeNameSoda} required>
              <option selected disabled>Elija la gaseosa</option>
              <option value="pepsi">Pepsi</option>
              <option value="coca-cola">Coca-cola</option>
              <option value="sprite">Sprite</option>
              <option value="quatro">Quatro</option>
              <option value="7up">7up</option>
              <option value="postobon manzana">Postobon-Manzana</option>
              <option value="postobon colombiana">Postobon-Colombiana</option>
              <option value="canada dry">Canada Dry</option>
      </select>
     
      )
    }else if(typeSoda == "te"){
      return(
      
        <select onChange={handleOnchangeNameSoda} required>
                <option selected disabled>Elija el té</option>
                <option value="mr tea de limon">Mr tea de limón</option>
                <option value="mr tea de durazno">Mr tea de durazno</option>
                <option value="hatsu">Hatsu</option>
                <option value="fuzetea de durazno">Fuzetea de durazno</option>
                <option value="fuzetea de limon">Fuzetea de limón</option>
                <option value="fuzetea de frutos rojos">Fuzetea de frutos rojos</option>
                <option value="nestea de limon">Nestea de limón</option>
                <option value="nestea de durazno">Nestea de durazno</option>
        </select>
     
      )
    }
    else if(typeSoda == "agua"){
      return(
        
          <select onChange={handleOnchangeNameSoda} required>
                <option selected disabled>Elija el agua</option>
                <option value="cristal">Cristal</option>
                <option value="cristal con gas">Cristal con gas</option>
                <option value="brisa">Brisa</option>
                <option value="cielo">Cielo</option>
                <option value="vital">Vital</option>
                <option value="vital con gas">Vital con gas</option>
          </select>
       
      )
    }else if(typeSoda == "cerveza"){
      return(
        
          <select onChange={handleOnchangeNameSoda} required>
                <option selected disabled>Elija la cerveza</option>
                <option value="club colombia">Club-Colombia</option>
                <option value="corona">Corona</option>
                <option value="poker">Poker</option>
                <option value="aguila">Aguila</option>
                <option value="aguila light">Aguila-light</option>
                <option value="andina">Andina</option>
                <option value="heineken">Heineken</option>
                <option value="costeña">Costeña</option>
          </select>
       
      )
    }
    else if (typeSoda == "jugo natural"){
      return(
        
          <select onChange={handleOnchangeNameSoda} required>
                <option selected disabled>Elija el jugo natural</option>
                <option value="Mora">Mora</option>
                <option value="mango">Mango</option>
                <option value="lulo">Lulo</option>
                <option value="guayaba">Guayaba</option>
                <option value="guanabana">Guanabana</option>
                <option value="piña">Piña</option>
                <option value="Maracuyá">Maracuya</option>
                <option value="naranja">Naranja</option>
          </select>
       
      )
    }
    else if(typeSoda == "jugo artificial"){
      return(
        
          <select onChange={handleOnchangeNameSoda} required>
                <option selected disabled>Elija el jugo artificial</option>
                <option value="hit mango">Hit de mango</option>
                <option value="hit mora">Hit de mora</option>
                <option value="hit frutos tropicales">Hit de frutos tropicales</option>
                <option value="hit naranja piña">Hit de naranja piña</option>
                <option value="hit lulo">Hit de lulo</option>
                <option value="cifrut de mora">Cifrut de mora</option>
                <option value="cifrut de granadilla">Cifrut de granadilla</option>
                <option value="cifrut de naranja">Cifrut de naranja</option>
                <option value="nectar">Nectar</option>
                <option value="tutti frutti">Tutti frutti</option>
                <option value="del valle">Del valle</option>
          </select>
       
      ) 
    }else{
      return (
        <select></select>
      )
    }
  }

  const handleSubmitMeats = (e) => {
    e.preventDefault();
    let arayCheked = [
      context.isChecked1,
      context.isChecked2,
      context.isChecked3,
      context.isChecked4,
      context.isChecked5,
      context.isChecked6,
      context.isChecked7,
      context.isChecked8,
      context.isChecked9,
      context.isChecked10,
    ];
    let validate = [];
    for (let i = 0; i < 10; i++) {
      if (arayCheked[i]) {
        validate.push(arayCheked[1]);
      }
    }

    if (validate.length > 2) {
      alert("No puede poner mas de dos ingredientes");
      setValidateForm1(false);
    } else if (validate.length == 0) {
      alert("tiene que poner al menos un ingrediente");
      setValidateForm1(false);
    } else {
      alert("validado");
      setValidateForm1(true);
    }
  };

  const handleSubmitQueso = (e) => {
    e.preventDefault();
    let arayCheked = [
      context.isCheckedQueso1,
      context.isCheckedQueso2,
      context.isCheckedQueso3,
      context.isCheckedQueso4,
      context.isCheckedQueso5,
      context.isCheckedQueso6,
      context.isCheckedQueso7,
      context.isCheckedQueso8,
    ];
    let validate = [];
    for (let i = 0; i < 10; i++) {
      if (arayCheked[i]) {
        validate.push(arayCheked[1]);
      }
    }

    if (validate.length > 2) {
      setValidateForm2(false);
      alert("No puede poner mas de dos ingredientes");
    } else if (validate.length == 0) {
      setValidateForm2(false);
      alert("tiene que poner al menos un ingrediente");
    } else {
      alert("validado");
      setValidateForm2(true);
    }
  };

  const handleSubmitVegetales = (e) => {
    e.preventDefault();
    let arayCheked = [
      context.isCheckedVegetales1,
      context.isCheckedVegetales2,
      context.isCheckedVegetales3,
      context.isCheckedVegetales4,
      context.isCheckedVegetales5,
      context.isCheckedVegetales6,
      context.isCheckedVegetales7,
      context.isCheckedVegetales8,
    ];
    let validate = [];
    for (let i = 0; i < 10; i++) {
      if (arayCheked[i]) {
        validate.push(arayCheked[1]);
      }
    }

    if (validate.length > 3) {
      setValidateForm3(false);
      alert("No puede poner mas de tres ingredientes");
    } else if (validate.length == 0) {
      setValidateForm3(false);
      alert("tiene que poner al menos un ingrediente");
    } else {
      alert("validado");
      setValidateForm3(true);
    }
  };

  const handleSubmitSalsas = (e) => {
    e.preventDefault();
    let arayCheked = [
      context.isCheckedSalsas1,
      context.isCheckedSalsas2,
      context.isCheckedSalsas3,
      context.isCheckedSalsas4,
      context.isCheckedSalsas5,
      context.isCheckedSalsas6,
    ];
    let validate = [];
    for (let i = 0; i < 10; i++) {
      if (arayCheked[i]) {
        validate.push(arayCheked[1]);
      }
    }

    if (validate.length > 2) {
      setValidateForm4(false);
      alert("No puede poner mas de dos ingredientes");
    } else if (validate.length == 0) {
      setValidateForm4(false);
      alert("tiene que poner al menos un ingrediente");
    } else {
      alert("validado");
      setValidateForm4(true);
    }
  };

  const handleSubmitAderezos = (e) => {
    e.preventDefault();
    let arayCheked = [
      context.isCheckedAderezos1,
      context.isCheckedAderezos2,
      context.isCheckedAderezos3,
      context.isCheckedAderezos4,
      context.isCheckedAderezos5,
      context.isCheckedAderezos6,
    ];
    let validate = [];
    for (let i = 0; i < 10; i++) {
      if (arayCheked[i]) {
        validate.push(arayCheked[1]);
      }
    }

    if (validate.length > 2) {
      setValidateForm5(false);
      alert("No puede poner mas de dos ingredientes");
    } else if (validate.length == 0) {
      setValidateForm5(false);
      alert("tiene que poner al menos un ingrediente");
    } else {
      alert("validado");
      setValidateForm5(true);
    }
  };
console.log(sizeSoda);
  const handleSubmitBebida = (e) => {
    e.preventDefault()

    if (typeSoda == "" || nameSoda == "" || sizeSoda == "") {
      alert("tiene que completartodos los campos");
      setValidateForm7(false)
    } else {
      alert("validado");
      setValidateForm7(true);
      
      if (sizeSoda =="200ml") {
        setCostSoda(1500)
      }else if(sizeSoda == "250ml"){
        setCostSoda(2000)
      }else if(sizeSoda == "350ml"){
        setCostSoda(2500)
      }else if(sizeSoda == "500ml"){
        setCostSoda(3000)
      }else if(sizeSoda == "1 litro"){
        setCostSoda(4000)
      }else if(sizeSoda == "2 litros"){
        setCostSoda(3000)
      }
    }
  }

  const handleOnchange = (e) => {
    setSize(e.target.value);

  }

  const handleSubmitSize = (e) =>{
    e.preventDefault();
    if (size == "pequeña") {
      setValidateForm6(true)
      setCost(12000);
    }else if(size == "mediana"){
      setValidateForm6(true)
      setCost(16000);
    }else if(size == "grande"){
      setValidateForm6(true)
      setCost(24000);
    }else if(size == "extragrande"){
      setValidateForm6(true)
      setCost(32000);
    }else{
      setValidateForm6(false)
      alert("Eliga una opcion")
    }
  }

  const confirmPizza = () => {
    if (validateForm1 && validateForm2 && validateForm3 && validateForm4 && validateForm5 && validateForm6 && validateForm7) {
      let ingredients = [];
      let soda = [];
    
      if (context.isChecked1) {
        ingredients.push("Pepperoni");
      }
      if (context.isChecked2) {
        ingredients.push("Jamon");
      }
      if (context.isChecked3) {
        ingredients.push("Salchicha");
      }
      if (context.isChecked4) {
        ingredients.push("Tocino");
      }
      if (context.isChecked5) {
        ingredients.push("Pollo");
      }
      if (context.isChecked6) {
        ingredients.push("Carne Molida");
      }
      if (context.isChecked7) {
        ingredients.push("Salami");
      }
      if (context.isChecked8) {
        ingredients.push("Chorizo");
      }
      if (context.isChecked9) {
        ingredients.push("Atun");
      }
      if (context.isChecked10) {
        ingredients.push("Prosciutto");
      }
      if (context.isCheckedQueso1) {
        ingredients.push("Mozarella");
      }
      if (context.isCheckedQueso2) {
        ingredients.push("Parmesano");
      }
      if (context.isCheckedQueso3) {
        ingredients.push("Cheddar");
      }
      if (context.isCheckedQueso4) {
        ingredients.push("Feta");
      }
      if (context.isCheckedQueso5) {
        ingredients.push("Cabra");
      }
      if (context.isCheckedQueso6) {
        ingredients.push("Ricotta");
      }
      if (context.isCheckedQueso7) {
        ingredients.push("Gorgonzola");
      }
      if (context.isCheckedQueso8) {
        ingredients.push("Azul");
      }
      if (context.isCheckedVegetales1) {
        ingredients.push("Champiñones");
      }
      if (context.isCheckedVegetales2) {
        ingredients.push("Pimientos");
      }
      if (context.isCheckedVegetales3) {
        ingredients.push("Maiz");
      }
      if (context.isCheckedVegetales4) {
        ingredients.push("Cebolla");
      }
      if (context.isCheckedVegetales5) {
        ingredients.push("Tomate");
      }
      if (context.isCheckedVegetales6) {
        ingredients.push("Espinacas");
      }
      if (context.isCheckedVegetales7) {
        ingredients.push("Piña");
      }
      if (context.isCheckedVegetales8) {
        ingredients.push("Tomates secos");
      }
      if (context.isCheckedSalsas1) {
        ingredients.push("Salsa de tomate");
      }
      if (context.isCheckedSalsas2) {
        ingredients.push("Salsa de BBQ");
      }
      if (context.isCheckedSalsas3) {
        ingredients.push("Salsa Alfredo");
      }
      if (context.isCheckedSalsas4) {
        ingredients.push("Salsa Pesto");
      }
      if (context.isCheckedSalsas5) {
        ingredients.push("Slasa Ranchera");
      }
      if (context.isCheckedSalsas6) {
        ingredients.push("Salsa de ajo");
      }
      if (context.isCheckedAderezos1) {
        ingredients.push("Oregano");
      }
      if (context.isCheckedAderezos2) {
        ingredients.push("Albaca");
      }
      if (context.isCheckedAderezos3) {
        ingredients.push("Perejil");
      }
      if (context.isCheckedAderezos4) {
        ingredients.push("Pimienta");
      }
      if (context.isCheckedAderezos5) {
        ingredients.push("Sal");
      }
      if (context.isCheckedAderezos6) {
        ingredients.push("Ajo picado");
      }

      if (ingredients.length == 9) {
        context.setOrder({...context.order,
          ingredient1:ingredients[0],
          ingredient2:ingredients[1],
          ingredient3:ingredients[2],
          ingredient4:ingredients[3],
          ingredient5:ingredients[4],
          ingredient6:ingredients[5],
          ingredient7:ingredients[6],
          ingredient8:ingredients[7],
          ingredient9:ingredients[8],
          size:size,
          cost:cost,
          nameSoda:nameSoda,
          typeSoda:typeSoda,
          sizeSoda:sizeSoda,
          costSoda:costSoda
        });
      }
      if (ingredients.length == 8) {
        context.setOrder({...context.order,
          ingredient1:ingredients[0],
          ingredient2:ingredients[1],
          ingredient3:ingredients[2],
          ingredient4:ingredients[3],
          ingredient5:ingredients[4],
          ingredient6:ingredients[5],
          ingredient7:ingredients[6],
          ingredient8:ingredients[7],
          size:size,
          cost:cost,
          nameSoda:nameSoda,
          typeSoda:typeSoda,
          sizeSoda:sizeSoda,
          costSoda:costSoda
        });
      }
      if (ingredients.length == 7) {
        context.setOrder({...context.order,
          ingredient1:ingredients[0],
          ingredient2:ingredients[1],
          ingredient3:ingredients[2],
          ingredient4:ingredients[3],
          ingredient5:ingredients[4],
          ingredient6:ingredients[5],
          ingredient7:ingredients[6],
          size:size,
          cost:cost,
          nameSoda:nameSoda,
          typeSoda:typeSoda,
          sizeSoda:sizeSoda,
          costSoda:costSoda
        });
      }
      if (ingredients.length == 6) {
        context.setOrder({...context.order,
          ingredient1:ingredients[0],
          ingredient2:ingredients[1],
          ingredient3:ingredients[2],
          ingredient4:ingredients[3],
          ingredient5:ingredients[4],
          ingredient6:ingredients[5],
          size:size,
          cost:cost,
          nameSoda:nameSoda,
          typeSoda:typeSoda,
          sizeSoda:sizeSoda,
          costSoda:costSoda
        });
      }
      if (ingredients.length == 5) {
        context.setOrder({...context.order,
          ingredient1:ingredients[0],
          ingredient2:ingredients[1],
          ingredient3:ingredients[2],
          ingredient4:ingredients[3],
          ingredient5:ingredients[4],
          size:size,
          cost:cost,
          nameSoda:nameSoda,
          typeSoda:typeSoda,
          sizeSoda:sizeSoda,
          costSoda:costSoda
        });
      }
    }else{
      alert("Valide todo")
    }
  };
console.log(costSoda);
  return (
     
      <section className="order-form">
        <form onSubmit={handleSubmitMeats}>

          
          
            <h3>Carnes</h3>

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
            <label>Atun</label>

            <input
              type="checkbox"
              checked={context.isChecked10}
              onChange={context.handleCheckboxChange10}
            />

            <label>Prosciutto</label>
          
          <button>Checar</button>
        </form>

        <form onSubmit={handleSubmitQueso}>
          <h3>Queso</h3>
          {/*2*/}
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
          <h3>Vegetales</h3>
          {/*3*/}
          <label>Champiñones</label>
          <input
            type="checkbox"
            checked={context.isCheckedVegetales1}
            onChange={context.handleCheckboxChangeVegetales1}
          />
          <label>Pimientos</label>
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
          <h3>Salsas</h3>
          {/*2*/}
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
          <label>Salsa Pesto</label>
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
          <h3>Aderezos</h3>
          {/*3*/}
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
          <label>Pimienta</label>
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
         <form onSubmit={handleSubmitSize}>
        <select name="tamaño" onChange={handleOnchange} required>
                <option selected disabled>Elija un tamaño</option>
                <option value="pequeña">Pequeña</option>
                <option value="mediana">Mediana</option>
                <option value="grande">Grande</option>
                <option value="extragrande">Extragrande</option>
        </select>
        <button>checar</button>
        </form>
        <form onSubmit={handleSubmitBebida}>
          <h3>Bebida</h3>
          
          <input type="radio" value="gaseosa" checked={typeSoda == "gaseosa"} onChange={(e) => setTypeSoda(e.target.value)} />
          <label>Gaseosa</label>

          <input type="radio" value="te" checked={typeSoda == "te"} onChange={(e) => setTypeSoda(e.target.value)} />
          <label>Té</label>

          <input type="radio" value="agua" checked={typeSoda == "agua"} onChange={(e) => setTypeSoda(e.target.value)} />
          <label>Agua</label>

          <input type="radio" value="cerveza" checked={typeSoda == "cerveza"} onChange={(e) => setTypeSoda(e.target.value)} />
          <label>Cerveza</label>

          <input type="radio" value="jugo natural" checked={typeSoda == "jugo natural"} onChange={(e) => setTypeSoda(e.target.value)} />
          <label>Jugo natural</label>

          <input type="radio" value="jugo artificial" checked={typeSoda == "jugo artificial"} onChange={(e) => setTypeSoda(e.target.value)} />
          <label>Jugos artificiales</label>
           {nameSodaForm()}
           <select name="tamaño" onChange={handleOnchangeSizeSoda} required>
                <option selected disabled>Elija tamaño de la bebida</option>
                <option value="200ml">200ml</option>
                <option value="250ml">250ml</option>
                <option value="350ml">350ml</option>
                <option value="500ml">500ml</option>
                <option value="1 litro">1 Litro</option>
                <option value="2 litros">2 Litros</option>
        </select>
          <button>Checar</button>
        </form>
        
       
       
        <button onClick={confirmPizza}>Confirmar</button>
      </section>  
  );
};
