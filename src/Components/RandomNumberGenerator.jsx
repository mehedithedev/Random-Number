import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function RandomNumberGenerator(props) {
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

  useEffect(() => {
    localStorage.setItem("numbers", JSON.stringify(numbers));
  }, [numbers]);

  return (
    <div>
      <Button onClick={handleClick}>Generate Random Number</Button>
      <div>{randomNumber}</div>
      <h1>Numbers</h1>
    </div>
  );
}

export default RandomNumberGenerator;
