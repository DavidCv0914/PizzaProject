import React,{useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import { dataUser } from "../../../api/api";
import Cookie from "universal-cookie";

export const Header = () => {

    const cookie = new Cookie()
    let validate = cookie.get("token")
    const [infoUser,setInfoUser] = useState({
        cellphone: "",
        codigo: 0,
        email: "",
        iconUser: "",
        name: "",
        password: "",
        surname: ""
    })
    const [verifyInfo,setVerifyInfo] = useState(false)

    useEffect(()=>{
        async function loadInfoUser(){
            const response = await dataUser()
            setInfoUser(response.data.data);
            console.log(response);
            
        }
        loadInfoUser()
    },[])
    useEffect(()=>{
        if(validate){
            setVerifyInfo(true)
        }else{
            setVerifyInfo(false)
        }
    },[])

  return (
    <header>
            <nav className="nav">
                <div className="logo">
                    <Link to="/"></Link>
                </div>
                <ul className="menu">
                    <li><Link to="#">Menu</Link></li>
                    <li><Link to="#">Encuentranos</Link></li>
                    <li><Link to="#">Contactanos</Link></li>
                </ul>
                {verifyInfo ? 
                <div className="usuario">
                    <Link to="/" className="btn">
                    {infoUser.name}            
                    </Link> 
                    <div className="usuario-btn">
                        <Link to="/" className="btn"></Link>
                    </div>
                </div>:
                <div className="usuario">
                    <Link to="/LogIn" className="btn">
                    Iniciar sesión           
                    </Link> 
                    <div className="usuario-btn">
                        <Link to="/LogIn" className="btn"></Link>
                    </div>
                </div>}
            </nav>
            <div className="hero">
                <p>Encuentra las mejores pizzas</p>
            </div>
    </header>
  )
}
