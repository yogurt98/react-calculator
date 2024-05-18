import Header from "./component/Header";
import Results from "./component/Results";
import UserInput from "./component/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header></Header>
      <UserInput onChange={handleChange} userInput={userInput}></UserInput>
      {!inputIsValid && <p className="center">Please enter a duration greater than 0.</p>}
      {inputIsValid && <Results userInput={userInput}></Results>}
    </>
  );
}

export default App;
