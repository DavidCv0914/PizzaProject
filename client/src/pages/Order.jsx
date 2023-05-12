import React,{useState} from "react";

export const Order = () => {

    const [isChecked, setIsChecked] = useState(false);

    function handleCheckboxChange() {
      setIsChecked(!isChecked);
    }
    console.log(isChecked);

    return(
        <>
        <h1>hellow world</h1>
        <form>
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleCheckboxChange} 
        />
        </form>
        </>
    )
}