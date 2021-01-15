import React, {useState} from "react";
import {Link} from "react-router-dom";
import Ratings from './Rating';

export default function Products(props){
    const {products}=props;
    const [newproducts,setproducts]=useState(products);

    const submitHandler = (e) => {
        e.preventDefault();
     
      };
      const  setSearchKeyword=(e)=>{
        const newlist=products.filter(x=>x.title.includes(e));
        setproducts(newlist);
      }

    return (
        <>
<ul className="filter">
  <li>
    <form 
    onSubmit={submitHandler}
    >
      <input
        name="searchKeyword"
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  </li>
  <li>
    Sort By{' '}
    <select name="sortOrder"
    //  onChange={sortHandler}
     >
      <option value="">Newest</option>
      <option value="lowest">Lowest</option>
      <option value="highest">Highest</option>
    </select>
  </li>
</ul>
        {/* { loading?<div>Loading..</div>:
    error?{error}: */}
    <ul className="products">
        {
            newproducts.map((item)=>
            <li key={item.id} >
            <div className="product">
            <Link to={"/product/"+item.id} className="link">
                <img src={item.filename} alt="image1" className="productimage"/>
                </Link>
                <div className="productname">
                    <Link to={"/product/"+item.id} className="link ">
                        {item.title}
                    </Link> 
                    </div>
                <div className="productbrand">{item.type}</div>
                <div className="productprice">${item.price}</div>
                <div className="productrating">
                <Ratings
                    value={item.rating}
                  />
        {/* {product.rating} Stars ({product.numReview} Reviews) */}
                 </div>
            </div>
        </li>
            )}
        </ul>
    </>)
}
