  import React,{useState} from 'react'
import { Link,useNavigate } from "react-router-dom";
import { loginUser } from "../api/api";

export const LogIn = () => {

  const navigate = useNavigate()
    const [loginUserDate,setLoginUserDate] = useState({
        email:"",
        password:""
    })

    const handleOnChange=(e) => {
      setLoginUserDate({...loginUserDate, [e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
      e.preventDefault()
      const response = await loginUser(loginUserDate)
      if (response.data.data = "Login successful") {
        if (response.data.rol == "user") {
          console.log("user");
          localStorage.setItem('token',response.data.token)
          window.location.href="/"
        }
        if (response.data.rol == "admin") {
          localStorage.setItem('token',response.data.token)
        }
      }
  }

  return (
    <div className="form-contain">

        <a className="volver" href="/">Volver</a>

        <div className="form-contain-f">

            <h1>Iniciar Sesion</h1>

            <form onSubmit={handleSubmit}>

                <h2>Correo Electronico</h2>

                <input required name="email" type="email" placeholder="Ingrese su Correo Eléctronico" onChange={handleOnChange}/>

                <h2>Contraseña</h2>

                <input required name="password" type="password" placeholder="Ingrese su Contraseña" onChange={handleOnChange}/>
            
                <div className="form-contain-f-btn">
                    <button>Enviar</button>
                </div>

            </form>

            <Link to="/SingUp">¿No tienes una cuenta? Registrate</Link>

        </div>

    </div>
  )
}
