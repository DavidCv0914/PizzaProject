import {Route,Routes} from 'react-router-dom'
import Index from '../pages/Index';
import { SingUp } from "../pages/SingUp";
import { LogIn } from "../pages/LogIn";
import { Order } from "../pages/Order";

export function Router() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/SingUp' element={<SingUp/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/Order' element={<Order/>}/>
    </Routes>
    </>
  )
}

