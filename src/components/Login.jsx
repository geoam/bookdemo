import React,{useState, useEffect} from 'react'
import '../App';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Form(){

	const[ username, setUsername] = useState(' ');

	function handleSubmit(e){
        e.preventDefault();
        console.log(username);

	}

	return(

	

}

export default Login

