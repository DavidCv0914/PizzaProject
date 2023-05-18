import React,{useEffect,useState} from 'react'
import { Link,useNavigate } from "react-router-dom";
import { dataUser } from "../../../api/api";
import Cookie from "universal-cookie";

export const Header = () => {
    const navigate = useNavigate()
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

    const [active, setActive]= useState(false)

    function setActiveNavbar() {
        if (window.scrollY >= 850) {
            setActive(true)
        }else{
            setActive(false)
        }
    }
    window-addEventListener('scroll', setActiveNavbar)

    const login = () =>{
        navigate("/LogIn")
    }

  return (
    <header>
            <nav className={active ? 'nav active' : 'nav'}>                                 
                <div className="logo">
                    <Link to="/"></Link>
                </div>                                                                                                                                                                                                      
                <ul className="menu">
                    <li><Link to="#">Menu</Link></li>
                    <li><Link to="feature">Encuentranos</Link></li>
                    <li><Link to="about">Contactanos</Link></li>                                                                                                                                                                                                            
                </ul>
                {verifyInfo ? 
                <div className="usuario">
                    <Link to="/" className="btn">
                    {infoUser.name}            
                    </Link> 
                    <div className="usuario-btn">
                    <img src={infoUser.iconUser} alt="" /> 
                    </div>
                </div>  :
                <div className="usuario">
                    <Link to="/LogIn" className="btn">
                    Iniciar sesión           
                    </Link> 
                    <div className="usuario-btn">
                       <img src="https://res.cloudinary.com/de2sdukuk/image/upload/v1682083366/usericon_eqm409.jpg" alt="Usuario" onClick={login}/> 
                    </div>
                </div>}
            </nav>
            <div className="hero">
                <p>Encuentra las mejores pizzas</p>
            </div>
    </header>
  )
}
