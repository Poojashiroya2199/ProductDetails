import React, { useEffect ,useState} from "react";
import { Link } from "react-router-dom";
import Ratings from "./Rating";

export default function Product(props){
  console.log(props);
  const products=props.products;
    console.log(products);
    console.log(props.match.params.id);
    const product=products.find(x=>x.id===(props.match.params.id));
    // console.log(product);
    const [qty, setqty] = useState("");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        
      };
     const handleAddToCart=()=>{
        product.value=qty;
         props.history.push("/cart");
     }
     return (
        <div>
          <div className="backtoresult">
            <Link to="/" className="link"> Back to result</Link>
          </div>
         
              <div className="details">
                <div className="detailsimage">
                  <img src={product.filename} alt="product"></img>
                </div>
                <div className="detailsinfo">
                  <ul>
                    <li>
                      <h4>{product.title}</h4>
                    </li>
                    <li>
                      <a href="#reviews">
                        <Ratings
                          value={product.rating}
                        />
                      </a>
                    </li>
                    <li>
                      Price: <b>${product.price}</b>
                    </li>
                    <li>
                      Description:
                      <div>{product.description}</div>
                    </li>
                  </ul>
                </div>
                <div className="detailsaction">
                  <ul>
                    <li>Price: {product.price}</li>
                    <li>
                      Status:{' '}
                      {/* {product.countInStock > 0 ? */}
                       'In Stock' 
                      {/* //  : 'Unavailable.'} */}
                    </li>
                    <li>
                      Qty:{' '}
                      <select
                        value={qty}
                        onChange={(e) => {
                          setqty(e.target.value);
                        }}
                      >
                        {[...Array(10).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </li>
                    <li>
                      {/* {product.countInStock > 0 && ( */}
             
                        <button
                          onClick={()=>handleAddToCart(product.addcart)}
                          className="button primary"
                        >
                          Add to Cart
                        </button>
                      {/* )} */}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content-margined">
                <h2>Reviews</h2>
                <div>There is no review</div>
                <ul className="review" id="reviews">
                  {/* {product.reviews.map((review) => (
                    <li key={review.id}>
                      <div>{review.name}</div>
                      <div>
                        <Ratings value={review.rating}></Ratings>
                      </div>
                      <div>{review.createdAt.substring(0, 10)}</div>
                      <div>{review.comment}</div>
                    </li>
                  ))} */}
                  <li>
                    <h3>Write a customer review</h3>
                    {/* {userInfo ? ( */}
                    <form onSubmit={submitHandler}>
                        <ul className="formcontainer">
                          <li>
                            <label htmlFor="rating">Rating</label>
                            <select
                              className="rating"
                              id="rating"
                              value={rating}
                              onChange={(e) => setRating(e.target.value)}
                            >
                              <option value="1">1- Poor</option>
                              <option value="2">2- Fair</option>
                              <option value="3">3- Good</option>
                              <option value="4">4- Very Good</option>
                              <option value="5">5- Excelent</option>
                            </select>
                          </li>
                          <li>
                            <label htmlFor="comment">Comment</label>
                            <textarea
                              name="comment"
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                            ></textarea>
                          </li>
                          <li>
                            <button type="submit" className="button primary">
                              Submit
                            </button>
                          </li>
                        </ul>  
                      </form>
                    {/* ) : ( */}
                      <div>
                        Please <Link to="/signin">Sign-in</Link> to write a review.
                      </div>
                    {/* )} */}
                  </li>
                </ul>
              </div>
            {/* </>
          )} */}
        </div>
      );
    }