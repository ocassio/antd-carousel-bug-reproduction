import { Carousel } from "antd";
import React, { useRef } from "react";

import './App.css';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function App() {

  // Replacing type with any works just fine, though
  // const ref = useRef<any>();

  const ref = useRef<typeof Carousel>();
  const handleNext = () => ref.current?.next();

  return (
    <div>
      <button type="button" onClick={handleNext}>Next</button>
      <Carousel ref={ref}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
