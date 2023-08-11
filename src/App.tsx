import * as React from 'react';
import './style.css';

const BAD_MIN_SIZE = 50;
const GOOD_SIZE = 200;

export default function App() {
  const goodRef = React.useRef();
  const badRef = React.useRef();

  const goodValue = 100000;
  const badValue = 10000;

  const goodSize = GOOD_SIZE; // fixed size for "good" circle
  const badSize = Math.max(goodSize * (badValue / goodValue), BAD_MIN_SIZE);

  React.useEffect(() => {
    if (goodRef.current && badRef.current) {
      const goodRadius = goodSize / 2;
      const badRadius = badSize / 2;
      const goodRect = goodRef.current.getBoundingClientRect();

      const cx = goodRect.left + goodRadius;
      const cy = goodRect.top + goodRadius;

      const angle = 45;
      const displacement = goodRadius - badRadius;

      const px = cx + displacement * Math.cos((Math.PI * angle) / 180);
      const py = cy + displacement * Math.sin((Math.PI * angle) / 180);

      badRef.current.style.left = `${px - badRadius}px`;
      badRef.current.style.top = `${py - badRadius}px`;
    }
  }, [goodRef, badRef]);

  return (
    <div>
      <h1>Bubble chart</h1>
      <div
        ref={goodRef}
        style={{
          backgroundColor: 'green',
          borderRadius: '100%',
          width: `${goodSize}px`,
          height: `${goodSize}px`,
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        .
      </div>
      <div
        ref={badRef}
        style={{
          backgroundColor: 'red',
          borderRadius: '100%',
          width: `${badSize}px`,
          height: `${badSize}px`,
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: '0.7',
        }}
      >
        .
      </div>
    </div>
  );
}
