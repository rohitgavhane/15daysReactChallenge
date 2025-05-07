import React, { useState } from 'react';
import Model from './Model';

function ModelMain() {
  const [isshow, setShow] = useState(false);

  const clickHandler = () => {
    setShow(!isshow);
  };

  return (
    <>
      <div style={styles.content}>
        <button style={styles.btn} onClick={clickHandler}>Show Modal</button>
      </div>

      {isshow && <Model clickHandler={clickHandler} />}
    </>
  );
}

const styles = {
  content: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: 'purple',
    color: 'white',
    padding: '15px 25px',
    borderRadius: '50px',
    border: '4px solid pink',
    cursor: 'pointer'
  }
};

export default ModelMain;
