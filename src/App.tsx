import './App.css';
import React from 'react';
import { CanvasSpiral } from './CanvasSpiral';
import { DOMSpiral } from './DOMSpiral';

const Toolbar: React.FC<{
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  canvasSize: number;
  setCanvasSize: React.Dispatch<React.SetStateAction<number>>;
}> = ({ size, setSize, canvasSize, setCanvasSize }) => {
  const [value, setValue] = React.useState<number>(size);
  const [canvasValue, setCanvasValue] = React.useState<number>(canvasSize);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (canvasValue > 0) {
          setCanvasSize(canvasValue);
        } else {
          alert(`${canvasValue} is not a number over 0.`);
        }

        if (value >= 3) {
          setSize(value);
        } else {
          alert(`${value} is not a number over 2.`);
        }
      }}
    >
      X:{' '}
      <input
        type="number"
        defaultValue={size}
        onChange={({ currentTarget }) =>
          setValue(parseInt(currentTarget.value))
        }
        style={{ width: '50px' }}
      />
      Canvas:
      <input
        type="number"
        defaultValue={canvasSize}
        onChange={({ currentTarget }) =>
          setCanvasValue(parseInt(currentTarget.value))
        }
      />
      <button>Set</button>
    </form>
  );
};

const DownloadButton: React.FC<{
  canvasRef: React.RefObject<HTMLCanvasElement>;
}> = ({ canvasRef }) => {
  return (
    <a
      href="#"
      download="ulam-spiral.png"
      onClick={(e) => {
        e.preventDefault();
        window.open(canvasRef?.current?.toDataURL() || '#', '_blank');
      }}
    >
      Download Spiral
    </a>
  );
};

const App: React.VFC = () => {
  const renderDOM = false;
  const [canvasSize, setCanvasSize] = React.useState<number>(800);
  const [size, setSize] = React.useState<number>(5);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  if (renderDOM) {
    return (
      <>
        <Toolbar
          setSize={setSize}
          size={size}
          setCanvasSize={setCanvasSize}
          canvasSize={canvasSize}
        />
        <DOMSpiral size={size} />
      </>
    );
  }

  return (
    <>
      <Toolbar
        setSize={setSize}
        size={size}
        setCanvasSize={setCanvasSize}
        canvasSize={canvasSize}
      />
      <DownloadButton canvasRef={canvasRef} />
      <CanvasSpiral size={size} canvasSize={canvasSize} canvasRef={canvasRef} />
    </>
  );
};

export default App;
