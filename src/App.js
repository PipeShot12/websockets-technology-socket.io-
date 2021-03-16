import React, { useState } from 'react';
import Login from "./components/login/Login"
import './App.css';

function App() {

  const [logged, setlogged] = useState(false);

  const isLoged = (state)=>{
    setlogged(state);
  }

  if(logged) {
    return (
        <h1>la app</h1>
      )
  }else{
    return <Login login={isLoged}></Login>
  }
}

export default App;
