import React, { useState } from "react";
import { Link , Switch, Route, Redirect } from "react-router-dom";
import Products from "./Products";
import Product from "./Product";
import Signin from "./Signin";
import Register from "./Register";
import Cart from "./Cart";
export default function Home(props){
  // console.log(props);
    const [showsidebar,setsidebar]=useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState("");
    // const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
   
        const openMenu=()=>{
            setsidebar(true);
    }
    const closemenu=()=>{
        setsidebar(false);
    }
    const {products}=props;
    // console.log(products);
    return (
    <div className="grid-container">
        <header className="header">
          <div className="menubtnname" >
              <button className="menubtn" onClick={openMenu}>
              &#9776;
              </button>
              <Link to="/" className="brand" >New Look</Link>
          </div>
          <div >
              <Link to="/cart" className="headerlinks"> Cart</Link>
              { (email!==""|| password!=="")? <Link to="/profile" className="link usersigned">{email}</Link>:
              <Link to="/signin" className="headerlinks ">Sign In</Link>
               } 
            
          </div>
        </header>
         <div >
        <aside className={!showsidebar?"sidebar":"sidebar open"}>
            <h3>Shopping Categories</h3>
            <button onClick={closemenu} className="sidebarclosebtn">X</button>
            <ul className="sidebarlist">
                <li>
                    <Link to="/" className="link">Skin Care</Link>
                </li>
                <li>
                <Link  to="/" className="link">Beauty Care</Link>
                </li>
            </ul>
        </aside> 
        <main className="main">
            <div className="content">
              <Switch>
                <Route path="/signin" render={(props)=><Signin email={email} setEmail={setEmail} password={password} setPassword={setPassword} error={error} setError={setError} {...props}/>}/>
                <Route path="/register" component={Register}/>
                <Route path="/cart" render={()=><Cart products={products} {...props}/>}/>
              <Route path="/product/:id" render={(props)=><Product  products={products} {...props}/>}/>
              <Route path="/"  exact render={()=><Products  products={products}/>}/> 
              <Redirect to="/"/>
              </Switch>
            </div>
        </main>
        </div>
        <div className="footer">
                All rights reserved.
        </div>
    </div>   
    )
}
