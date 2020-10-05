import React from 'react'; //Permite el uso de html en js
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import css from './index.css'

const saludo =  <h1>Hola Mundo</h1> //Al utilizar código html en JS este archivo se utiliza como un jsx y permite dicho uso.

const divRoot = document.querySelector('#root');


ReactDOM.render(<PrimeraApp saludo="Hola, soy Kenji"/>, divRoot); 
console.log(saludo);
console.log(divRoot);