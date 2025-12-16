import React from 'react'
import Counter from './Counter.jsx';
import {useContext} from 'react';
import {dataContext} from'./Home.jsx';

function Login(){
   const logindata=useContext(dataContext);
  return (
    <>
    {logindata}
    <div>Login Page</div>
    <Counter />
    </>
  )
}

export default Login