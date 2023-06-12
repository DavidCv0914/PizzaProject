import React,{createContext,useState} from 'react'

export const contextPage = createContext();

export default function ContextProvider({children}){
  const [viewMenu,setViewMenu] = useState("pizza");
  const [typePizzaMenu,setTypePizzaMenu] = useState(true)
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
  
  const [isCheckedQueso1, setIsCheckedQueso1] = useState(false);
  const [isCheckedQueso2, setIsCheckedQueso2] = useState(false);
  const [isCheckedQueso3, setIsCheckedQueso3] = useState(false);
  const [isCheckedQueso4, setIsCheckedQueso4] = useState(false);
  const [isCheckedQueso5, setIsCheckedQueso5] = useState(false);
  const [isCheckedQueso6, setIsCheckedQueso6] = useState(false);
  const [isCheckedQueso7, setIsCheckedQueso7] = useState(false);
  const [isCheckedQueso8, setIsCheckedQueso8] = useState(false);
  
  const [isCheckedVegetales1, setIsCheckedVegetales1] = useState(false);
  const [isCheckedVegetales2, setIsCheckedVegetales2] = useState(false);
  const [isCheckedVegetales3, setIsCheckedVegetales3] = useState(false);
  const [isCheckedVegetales4, setIsCheckedVegetales4] = useState(false);
  const [isCheckedVegetales5, setIsCheckedVegetales5] = useState(false);
  const [isCheckedVegetales6, setIsCheckedVegetales6] = useState(false);
  const [isCheckedVegetales7, setIsCheckedVegetales7] = useState(false);
  const [isCheckedVegetales8, setIsCheckedVegetales8] = useState(false);
  
  const [isCheckedSalsas1, setIsCheckedSalsas1] = useState(false);
  const [isCheckedSalsas2, setIsCheckedSalsas2] = useState(false);
  const [isCheckedSalsas3, setIsCheckedSalsas3] = useState(false);
  const [isCheckedSalsas4, setIsCheckedSalsas4] = useState(false);
  const [isCheckedSalsas5, setIsCheckedSalsas5] = useState(false);
  const [isCheckedSalsas6, setIsCheckedSalsas6] = useState(false);
  
  const [isCheckedAderezos1, setIsCheckedAderezos1] = useState(false);
  const [isCheckedAderezos2, setIsCheckedAderezos2] = useState(false);
  const [isCheckedAderezos3, setIsCheckedAderezos3] = useState(false);
  const [isCheckedAderezos4, setIsCheckedAderezos4] = useState(false);
  const [isCheckedAderezos5, setIsCheckedAderezos5] = useState(false);
  const [isCheckedAderezos6, setIsCheckedAderezos6] = useState(false);

  const [isCheckedBebidas1, setIsCheckedBebidas1] = useState(false);
  const [isCheckedBebidas2, setIsCheckedBebidas2] = useState(false);
  const [isCheckedBebidas3, setIsCheckedBebidas3] = useState(false);
  const [isCheckedBebidas4, setIsCheckedBebidas4] = useState(false);
  const [isCheckedBebidas5, setIsCheckedBebidas5] = useState(false);
  const [isCheckedBebidas6, setIsCheckedBebidas6] = useState(false);

  const [ingredients,setIngredients] = useState([])
  const [order, setOrder] = useState({
    ingredient1:"",
    ingredient2:"",
    ingredient3:"",
    ingredient4:"",
    ingredient5:"",
    ingredient6:"",
    ingredient7:"",
    ingredient8:"",
    ingredient9:"",
    size:"",
    cost:0,
    address:"",
    nameSoda:"",
    typeSoda:"",
    sizeSoda:"",
    costSoda:0,
    nameAdditional:"",
    typeAdditional:"",
    costAdditional:0
  });
  

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

  function handleCheckboxChangeSalsas1() {
    setIsCheckedSalsas1(!isCheckedSalsas1);
  }

  function handleCheckboxChangeSalsas2() {
    setIsCheckedSalsas2(!isCheckedSalsas2);
  }

  function handleCheckboxChangeSalsas3() {
    setIsCheckedSalsas3(!isCheckedSalsas3);
  }

  function handleCheckboxChangeSalsas4() {
    setIsCheckedSalsas4(!isCheckedSalsas4);
  }

  function handleCheckboxChangeSalsas5() {
    setIsCheckedSalsas5(!isCheckedSalsas5);
  }

  function handleCheckboxChangeSalsas6() {
    setIsCheckedSalsas6(!isCheckedSalsas6);
  }

  function handleCheckboxChangeAderezos1() {
    setIsCheckedAderezos1(!isCheckedAderezos1);
  }

  function handleCheckboxChangeAderezos2() {
    setIsCheckedAderezos2(!isCheckedAderezos2);
  }

  function handleCheckboxChangeAderezos3() {
    setIsCheckedAderezos3(!isCheckedAderezos3);
  }

  function handleCheckboxChangeAderezos4() {
    setIsCheckedAderezos4(!isCheckedAderezos4);
  }

  function handleCheckboxChangeAderezos5() {
    setIsCheckedAderezos5(!isCheckedAderezos5);
  }

  function handleCheckboxChangeAderezos6() {
    setIsCheckedAderezos6(!isCheckedAderezos6);
  }

  function handleCheckboxChangeBebidas1() {
    setIsCheckedBebidas1(!isCheckedBebidas1);
  }

  function handleCheckboxChangeBebidas2() {
    setIsCheckedBebidas2(!isCheckedBebidas2);
  }

  function handleCheckboxChangeBebidas3() {
    setIsCheckedBebidas3(!isCheckedBebidas3);
  }

  function handleCheckboxChangeBebidas4() {
    setIsCheckedBebidas4(!isCheckedBebidas4);
  }

  function handleCheckboxChangeBebidas5() {
    setIsCheckedBebidas5(!isCheckedBebidas5);
  }

  function handleCheckboxChangeBebidas6() {
    setIsCheckedBebidas6(!isCheckedBebidas6);
  }


   console.log(order);
  
  return (
    <contextPage.Provider value={{isChecked1,isChecked2,isChecked3,isChecked4,isChecked5,isChecked6,isChecked7,isChecked8,isChecked9,isChecked10,isCheckedAderezos1,isCheckedAderezos2,isCheckedAderezos3,isCheckedAderezos4,isCheckedAderezos5,isCheckedAderezos6,isCheckedQueso1,isCheckedQueso2,isCheckedQueso3,isCheckedQueso4,isCheckedQueso5,isCheckedQueso6,isCheckedQueso7,isCheckedQueso8,isCheckedSalsas1,isCheckedSalsas2,isCheckedSalsas3,isCheckedSalsas4,isCheckedSalsas5,isCheckedSalsas6,isCheckedVegetales1,isCheckedVegetales2,isCheckedVegetales3,isCheckedVegetales4,isCheckedVegetales5,isCheckedVegetales6,isCheckedVegetales7,isCheckedVegetales8,handleCheckboxChange1,handleCheckboxChange2,handleCheckboxChange3,handleCheckboxChange4,handleCheckboxChange5,handleCheckboxChange6,handleCheckboxChange7,handleCheckboxChange8,handleCheckboxChange9,handleCheckboxChange10,handleCheckboxChangeAderezos1,handleCheckboxChangeAderezos2,handleCheckboxChangeAderezos3,handleCheckboxChangeAderezos4,handleCheckboxChangeAderezos5,handleCheckboxChangeAderezos6,handleCheckboxChangeQueso1,handleCheckboxChangeQueso2,handleCheckboxChangeQueso3,handleCheckboxChangeQueso4,handleCheckboxChangeQueso5,handleCheckboxChangeQueso6,handleCheckboxChangeQueso7,handleCheckboxChangeQueso8,handleCheckboxChangeSalsas1,handleCheckboxChangeSalsas2,handleCheckboxChangeSalsas3,handleCheckboxChangeSalsas4,handleCheckboxChangeSalsas5,handleCheckboxChangeSalsas6,handleCheckboxChangeVegetales1,handleCheckboxChangeVegetales2,handleCheckboxChangeVegetales3,handleCheckboxChangeVegetales4,handleCheckboxChangeVegetales5,handleCheckboxChangeVegetales6,handleCheckboxChangeVegetales7,handleCheckboxChangeVegetales8,order,setOrder,ingredients,setIngredients,isCheckedBebidas1,isCheckedBebidas2,isCheckedBebidas3,isCheckedBebidas4,isCheckedBebidas5,isCheckedBebidas6,handleCheckboxChangeBebidas1,handleCheckboxChangeBebidas2,handleCheckboxChangeBebidas3,handleCheckboxChangeBebidas4,handleCheckboxChangeBebidas5,handleCheckboxChangeBebidas6,viewMenu,setViewMenu,typePizzaMenu,setTypePizzaMenu,}}>
        {children}
    </contextPage.Provider>
  )
}

