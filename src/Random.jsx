import React, { useState, useEffect } from "react";
// Code below is to ask the user to enter a number: 


function RandomNum(props) {
  const [numbers, setNumbers] = useState([]);
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const storedNumbers = JSON.parse(localStorage.getItem("numbers")) || [];
    setNumbers(storedNumbers);
  }, []);

  const handleClick = () => {
    const lastIndex = props.lastIndex;
    const availableNumbers = Array.from(
      { length: lastIndex },
      (_, i) => i + 1
    ).filter((n) => !numbers.includes(n));
    if (availableNumbers.length === 0) {
      setRandomNumber(null);
      return;
    }
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const newNumber = availableNumbers[randomIndex];
    setNumbers([...numbers, newNumber]);
    setRandomNumber(newNumber);
  };

  return (
    <div>
        <h1>Random Number Generator</h1>
        <h2>Click the button below to generate a random number from 1 to 88</h2>        
      <button onClick={handleClick}>Click Here !</button>
      <p>The random number is: <b>{randomNumber}</b></p>
    </div>
  );
}

export default RandomNum;
