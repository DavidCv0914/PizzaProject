import {Route,Routes} from 'react-router-dom'
import Index from '../pages/Index';
import { SingUp } from "../pages/SingUp";
import { LogIn } from "../pages/LogIn";
import { Order } from "../pages/Order";
import { Order1 } from "../pages/Order1";
import { Profile } from '../pages/Profile';

export function Router() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/SingUp' element={<SingUp/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/Order' element={<Order/>}/>
        <Route path='/Order1' element={<Order1/>}/>
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </>
  )
}

