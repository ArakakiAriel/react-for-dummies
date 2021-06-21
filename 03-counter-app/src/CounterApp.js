import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value);
 

  const agregar = () => {
    setCounter(counter + 1); //Uso del hook
    //setCounter( (c) => c+1) => c+1) //Es mejor utilizarla de esta forma ya que actualiza el estado del contador en el momento
    console.log(counter);
  };

  const restar = () => {
    setCounter(counter - 1);
  }
  const reset = () => {
    setCounter(value);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={agregar}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={restar}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
