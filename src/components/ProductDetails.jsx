import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
    
    const { id } = useParams();
    const [productData, setProductData] = useState(null);

    useEffect(() => { 
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setProductData(json);
            });
    },[id]);


    return (
    <div
                  to= {`/product/details/${productData?.id}`}
                  key={productData?.id}
                  style={{
                      width: "27%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      
                      marginRight: "2%",
                      marginBottom: "30px",
                  }}>
              <p>{productData?.title}</p>
                  <img
                      src={productData?.image}
                      alt={productData?.title}
                      style={{ maxwidth: "35%",
                               width: "350px",
                          height: "350px",
                          justifyContent:"center",
                          alignItems: "center",
                          display: "flex",
                           marginLeft: "15%",
                          marginBottom: "30px",
                          border: "2px solid blue",
            
                      }}  
                  />
              <p>{productData?.price}</p>
              <Link to="/login">Login to Add to Cart</Link>
        </div>
        );
}

export default ProductDetails;