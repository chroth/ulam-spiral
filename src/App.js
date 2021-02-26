import React from "react";
import "./App.css";
import { leastFactor } from "./leastFactor";
import { buildSpiral } from "./buildSpiral";

const isPrime = (value) => value >= 2 && value === leastFactor(value);

function App() {
  const size = 79;
  const [spiral, primes] = React.useMemo(() => {
    const leSpiral = buildSpiral(size);
    const lePrimes = leSpiral.map((l) => l.map(isPrime));
    return [leSpiral, lePrimes];
  }, [size]);

  return (
    <div className="spiral">
      {spiral.map((y, idxY) => (
        <div className="line" key={idxY}>
          {y.map((c, idxX) => (
            <div className={"n " + (primes[idxY][idxX] ? "p" : "np")} key={c}>
              {c}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
