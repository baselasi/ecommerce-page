import React from 'react';
import './App.css';
import  Header from './component/header'
import Cart from './component/cart';
import Main from './component/main';
function App() {
  const [name,setName] = React.useState("")  //the 4 state in app will control the cart content
  const [price,setPrice] = React.useState(0)
  const[number,setNumber] = React.useState(0)
  const [state,setState] = React.useState(false)    //if true the cart will be showing
  return (
    <>
      <Header
        State={setState} 
        show={state}
      />
      <Main
        Name={setName}        //after clciking the botton pass the obj values(name,number,price)to the App states by calling the hook functions
        Price={setPrice}      
        Numbers={setNumber}
        State={setState}    //after clicking the main div change the value of state to false and pass to the App state
        show={state}        //pass the state value frpm App to Main component using props(so you can know if cart is showing or not)
      />
      <Cart
        name={name}
        price={price}    
        state={state}
        number={number}    
      />
    </>
  );
}
export default App;