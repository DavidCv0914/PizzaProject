import React,{useState} from 'react'
import { Link,useNavigate } from "react-router-dom";
import { singUpUser } from "../api/api";

export const SingUp = () => {
    const navigate = useNavigate()
    const [newUser,setNewUser] = useState({
        email:"",
        name:"",
        surname:"",
        cellphone:"",
        password:""
    })

    const handleOnChange=(e) => {
        setNewUser({...newUser, [e.target.name]:e.target.value})
      }
      
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const response = await singUpUser(newUser)
        if (response.data == "INSERT_OK") {
            navigate('/LogIn')
        }else if(response.data == "Ya existe"){
            alert("ya existe")
        }else{
            alert(error);
        }
    }

  return (
    <div className="form-contain">

            <a className="volver" href="/">Volver</a>

            <div className="form-contain-f">

                <h1>Registrate</h1>

                <form onSubmit={handleSubmit}>
                
                    <h2>Correo Electronico</h2>

                    <input required name="email" type="email" placeholder="Ingrese su Correo Eléctronico" onChange={handleOnChange}/>

                    <h2>Nombre</h2>

                    <input required name="name" type="text" placeholder="Ingrese su Nombre" onChange={handleOnChange}/>

                    <h2>Apellido</h2>

                    <input required name="surname" type="text" placeholder="Ingrese su Apellido" onChange={handleOnChange}/>

                    <h2>Telefono</h2>

                    <input required name="cellphone" type="number" placeholder="Ingrese su Telefono" onChange={handleOnChange}/>

                    <h2>Contraseña</h2>

                    <input required name="password" type="password" placeholder="Ingrese su Contraseña" onChange={handleOnChange}/>

                    <div className="form-contain-f-btn">
                        <button>Enviar</button>
                    </div>
                
                </form>

                <Link to="/LogIn">¿Ya tienes cuenta? Inicia Sesion</Link>

            </div>

        </div>
  )
}
