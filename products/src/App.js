import './App.css';
import React, {useState,useEffect} from "react";
import axios from "axios";
import Home from "./components/Home";
function App(props) {
  const url="https://api4286.s3.ap-south-1.amazonaws.com/products.json";
  const [products,setProducts]= useState(null);
  useEffect(() => {
    axios.get(url).then(response=>{
       setProducts(response.data);
       response.data.map((option) => {
        // New properties to be added
        const newPropsObj = {
          value: 0,
          liked: false,
          addcart: false
        };
      
        // Assign new properties and return
        return Object.assign(option, newPropsObj);
      });
    });
    // console.log(props);
    return () => { };
  }, [products]);
   
 

  if(products){
  return (
    <div className="App">
    <Home products={products}/>
    </div>
  );
      }
      return (
        <div></div>
      )
}
export default App;