import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({item, parent, token, cart, setCart}){

    const addToCart = (item) => {

        let resultIndex = 0;
        let productQty = 0;

        const result = cart.find((product, index) => {
            resultIndex = index;
            return product.id === item.id;
        });
   
        if(result){
            cart[resultIndex].quantity +=1;
            productQty = cart[resultIndex].quantity;
            localStorage.setItem("cart", JSON.stringify(cart));
            setCart(cart);

        } else {
            item.quantity = 1;
            productQty = 1;
            const updatedCart = [...cart, item];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            setCart(updatedCart);

        }

        alert( "added item", productQty + " " + item.title + " in your cart");
     
    }
    console.log(cart);

    return(
        // eslint-disable-next-line no-template-curly-in-string
        <Link to={"/product/details/${item?.id}"}>
        <h2>{item?.title}</h2>
        {parent === "details" ? (

            <img src={item?.image} alt={item?.title} height={"500px"} />
        ):(

            <img src= {item?.image} alt={item?.title} /> 
        )}
       </Link>
      
    )
}
