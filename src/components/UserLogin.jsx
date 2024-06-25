import React, { useState, useEffect} from 'react'
import '../App';
import { API_URL } from '../API';
import axios from 'axios';
import { useAppContext } from "./context/appContext";
import { useNavigate } from 'react-router-dom';


const UserLogin = () => {

    const [products, setProducts] = useState([]);

    const{ favorites, addToFavorites, removeFromFavorites } = useAppContext();

    const navigate = useNavigate();

    //console.log("favorites are", favorites);

    const favoritesChecker = (id) => {
        const boolean = favorites.some((item)=> item.id === id);
        return boolean;
    };

    useEffect(()=>{

        axios
        .get(API_URL)
        .then (res=> {
            console.log(res.data)
            setProducts(res.data)
        }).catch(err=>console.log(err))

    }, []);
    

    return (
        <div className="book-list">
            {products.map((item)=> (
                    <div key={item.id} className="book">
                        <div><h4>{item.title}</h4></div>
                        <div><img 
                                src={item.image} 
                                alt="#" 
                                // eslint-disable-next-line no-template-curly-in-string
                                onClick = {() => navigate('/products')}
                            />
                        </div>

                        <div>
                            {favoritesChecker(item.id) ? 
                            <button onClick={() => removeFromFavorites(item.id)}>
                                Remove from Favorites
                            </button> : (<button onClick={()=> addToFavorites(item)}>Add to Favorites </button>)}
                            
                          
                        </div>
                        </div>

                ))}
            
            
            
            </div>
)}


export default UserLogin;