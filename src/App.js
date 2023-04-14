import logo from "./logo.svg";
import "./App.css";
import { createElement } from "react";
import { useState } from "react";

const Display = (props) => {
  return <div>{props.counter}</div>;
};
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  );
};

const Add = () => {
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex(index + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <Display counter={index} />
    </>
  );
};

const App = () => {
  const name = "Ahmed";
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Ali" />
      <Hello name={name} />
      <Add />
    </div>
  );
};

// function App() {
//   return (
//     <div>
//       <p>Hello world!</p>
//     </div>
//   );
// }

export default App;
