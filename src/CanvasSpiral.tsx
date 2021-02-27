import React from 'react';
import { buildSpiralGenerator } from './buildSpiral';
import { leastFactor } from './leastFactor';

const isPrime = (value: number) => value >= 2 && value === leastFactor(value);

export const CanvasSpiral: React.VFC<{ size: number; canvasSize: number }> = ({
  size,
  canvasSize,
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const scale = canvasSize / size;

  React.useEffect(() => {
    const canvasCtx = canvasRef.current?.getContext('2d');
    if (!canvasCtx) return;

    // Clear canvas
    canvasCtx.setTransform(1, 0, 0, 1, 0, 0);
    canvasCtx.scale(scale, scale);
    canvasCtx.fillStyle = 'black';
    canvasCtx.fillRect(0, 0, size, size);
    canvasCtx.fillStyle = 'green';

    const spiralGenerator = buildSpiralGenerator(size);
    for (const nextValues of spiralGenerator) {
      const [x, y, counter] = nextValues;
      if (isPrime(counter)) {
        canvasCtx.fillRect(x, y, 1, 1);
      }
    }
  });

  return (
    <div
      className="canvasWrapper"
      style={{
        width: `${canvasSize}px`,
        height: `${canvasSize}px`,
        margin: '0 auto',
      }}
    >
      <canvas ref={canvasRef} width={canvasSize} height={canvasSize} />
    </div>
  );
};
