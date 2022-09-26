import React,{useState} from 'react';
import axios from 'axios';

export default function Home(){
    const[dog,setDog]=useState()

    const btn=() => {
        axios.get("https://dog.ceo/api/breeds/image/random").then(response => {
      setDog(response.data.message)
    })
    }
    
    return(
        <>
        <button onClick={() => {btn()}}>Clique aqui</button>
        </>
    )
}