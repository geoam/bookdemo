import React from 'react'
import '../App';
import { useAppContext } from "./context/appContext";

const Cart = () => {

  const{ cart, addToCart, removeFromCart } = useAppContext();

  console.log("cart are", cart);

  const cartChecker = (id) => {
      const boolean = cart.some((book)=> book.id === id);
      return boolean;
  };


  return (
    <div className='cart'>
         { cart.length > 0 ? cart.map((book)=> (
                    <div key={book.id} className="book">
                        <div><h4>{book.title}</h4></div>
                        <div><img src={book.image} alt="#"/></div>

                        <div>
                            {cartChecker(book.id) ? 
                            <button onClick={() => removeFromCart(book.id)}>
                                Remove from Cart
                            </button> : (<button onClick={()=> addToCart(book)}>Add to Cart </button>)}
                            
                          
                        </div>
                        </div>

                )):<h1>no cart yet!</h1>}</div>
  )
}

export default Cart