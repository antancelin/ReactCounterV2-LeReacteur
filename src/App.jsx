import { useState } from "react";
import { FaCalculator } from "react-icons/fa6";
import "./App.css";

import Counter from "./components/Counter";
import Footer from "./components/Footer";

function App() {
  const [counters, setCounters] = useState([0]);

  const maxCounter = 3;

  const addCounter = () => {
    if (counters.length < maxCounter) {
      setCounters([...counters, 0]);
    }
  };

  const updateCounter = (index, newValue) => {
    const newCounters = [...counters];
    newCounters[index] = newValue;
    setCounters(newCounters);
  };

  return (
    <>
      <header>
        <FaCalculator className="logo" />
        <h1>React Counter v2</h1>{" "}
      </header>
      <main>
        {counters.length < maxCounter && (
          <button className="add-counter" onClick={addCounter}>
            Add counter
          </button>
        )}
        <div className="container">
          {counters.map((elem, index) => (
            <Counter
              key={index}
              counter={elem}
              setCounter={(newValue) => updateCounter(index, newValue)}
            />
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
