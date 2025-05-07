import React, { useState } from 'react';

function Model({ clickHandler }) {
  const [isshow, setShow] = useState(true);

  const closeHandler = () => {
    setShow(false);
    // You might also want to call the external clickHandler if it closes the modal
    clickHandler();
  };

  return (
    <>
      {isshow && (
        <div style={styles.overlay}>
          <div style={styles.container}>
            <button style={styles.closeBtn} onClick={clickHandler}>⛔</button>

            <div style={styles.content}>
              <p>
                This is a modal using React.js. <br />
                I have used props here to show the modal <br />
                when I clicked the button.
              </p>
            </div>

            <div>
              <button style={styles.btn} onClick={closeHandler}>Accept</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  container: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center',
    width: '400px',
    position: 'relative'
  },
  content: {
    margin: '20px 0'
  },
  btn: {
    backgroundColor: 'purple',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '50px',
    border: '2px solid pink',
    cursor: 'pointer'
  },
  closeBtn: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    fontSize: '20px',
    border: 'none',
    cursor: 'pointer'
  }
};

export default Model;
