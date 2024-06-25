import React, { useState, useEffect} from 'react'
import '../App';
import { API_URL } from '../API';
import axios from 'axios';
import { useAppContext } from "./context/appContext";
import { useNavigate } from 'react-router-dom';


const BookList = () => {

    const [books, setBooks] = useState([]);

    const{ favorites, addToFavorites, removeFromFavorites } = useAppContext();

    const navigate = useNavigate();

    //console.log("favorites are", favorites);

    const favoritesChecker = (id) => {
        const boolean = favorites.some((book)=> book.id === id);
        return boolean;
    };

    useEffect(()=>{

        axios
        .get(API_URL)
        .then (res=> {
            console.log(res.data)
            setBooks(res.data)
        }).catch(err=>console.log(err))

    }, []);
    

    return (
        <div className="book-list">
            {books.map((book)=> (
                    <div key={book.id} className="book">
                        <div><h4>{book.title}</h4></div>
                        <div><img 
                                src={book.image_url} 
                                alt="#" 
                                // eslint-disable-next-line no-template-curly-in-string
                                onClick = {() => navigate('/books')}
                            />
                        </div>

                        <div>
                            {favoritesChecker(book.id) ? 
                            <button onClick={() => removeFromFavorites(book.id)}>
                                Remove from Favorites
                            </button> : (<button onClick={()=> addToFavorites(book)}>Add to Favorites </button>)}
                            
                          
                        </div>
                        </div>

                ))}
            
            
            
            </div>
)}


export default BookList