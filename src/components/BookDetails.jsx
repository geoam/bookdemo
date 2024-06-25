import React,{useState, useEffect} from 'react'
import '../App';
import { useParams } from 'react-router-dom';
//import axios from 'axios';
//import { BOOK_DETAILS_URL } from '../API';

const BookDetails = () => {

  const [book, setBook] = useState({});

  const {id} = useParams();

  useEffect(() => {
      fetch('https://fakestoreapi.com/products/${id}')
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setBook(json);
        });
  }, []);

  return (
    <div className="book-details">
      <div className="book-image">
        <h2>{book?.title}</h2>
        <img src={book?.image} alt="#" />
        </div>
        <div className="book-description">
          <h2>Description</h2>
          <p>{book?.title}</p>
          <h2>Price</h2>
          <p>{book?.price}</p>
       
        </div>
      </div>
  )
}

export default BookDetails;