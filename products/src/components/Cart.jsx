
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Cart(props) {
  const {products}=props;
   const removeFromCartHandler = (productId) => {
    const product=products.find(x=>x.id===productId);
    // product.addcart=false;
  }
  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  }

  return <div className="cart">
    <div className="cartlist">
      <ul className="cartlistcontainer">
        <li>
          <h3>
            Shopping Cart
          </h3>
          <div>
            Price
          </div>
        </li>
        {
          // cartItems.length === 0 ?
          //   <div>
          //     Cart is empty
          // </div>
          //   :
            products.map(item =>
              <li key={item.id}>
                <div className="cartimage">
                  <img src={item.filename} alt="product" />
                </div>
                <div className="cartname">
                  <div>
                    <Link to={"/product/" + item.product} className="link">
                      {item.title}
                    </Link>

                  </div>
                  <div>
                    Qty:
                  <select value={item.value} 
                  // onChange={(e) => addToCart(item.product, e.target.value)}
                  >
                      {[...Array(10).keys()].map(x =>
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      )}
                    </select>
                    <button type="button" className="button"
                     onClick={() => removeFromCartHandler(item.product)}
                      >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="cartprice">
                  ${item.price}
                </div>
              </li>
            )
         } 
      </ul>

    </div>
    <div className="cartaction">
      <h3>
        Subtotal ( {products.reduce((a, c) => a + c.value, 0)} items)
        :
         $ {products.reduce((a, c) => a + c.price * c.value, 0)}
      </h3>
      <button onClick={checkoutHandler} className="button primary fullwidth" disabled={products.length === 0}>
        Proceed to Checkout
      </button>

    </div>

  </div>
}

export default Cart;