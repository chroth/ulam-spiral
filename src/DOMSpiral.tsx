import React from 'react';
import { leastFactor } from './leastFactor';
import { buildSpiral, SpiralT } from './buildSpiral';

export const isPrime: (value: number) => boolean = (value) =>
  value >= 2 && value === leastFactor(value);

type PrimesT = Array<Array<boolean>>;

export const DOMSpiral: React.VFC<{ size: number }> = ({ size }) => {
  const [spiral, primes] = React.useMemo<[SpiralT, PrimesT]>(() => {
    const leSpiral = buildSpiral(size);
    const lePrimes = leSpiral.map((l) => l.map(isPrime));
    return [leSpiral, lePrimes];
  }, [size]);

  return (
    <div className="spiral">
      {spiral.map((y, idxY) => (
        <div className="line" key={idxY}>
          {y.map((c, idxX) => (
            <div className={'n ' + (primes[idxY][idxX] ? 'p' : 'np')} key={c}>
              {c}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
