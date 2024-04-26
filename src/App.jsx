import React from 'react';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Reset from './Components/Reset';
import Change from './Components/Change';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Cart from './Components/Cart';
import First from './Components/First';
import CheckOut from './Components/CheckOut';
import Payment from './Components/Payment';
import Successful from './Components/Successful';

const App = () => {
  return (
    <div>
      
      <Routes> 
        <Route path='/' element={<First/>} /> 
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/Reset' element={<Reset/>}/>
        <Route path='/Change' element={<Change/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/CheckOut' element={<CheckOut/>}/>
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/Successful' element={<Successful/>}/>
      </Routes>  
      
    </div>
  );
}

export default App;
