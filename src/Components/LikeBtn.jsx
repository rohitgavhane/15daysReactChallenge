import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

function LikeBtn() {
  const [isLike, setLike] = useState(false);

  function clickhandler() {
    setLike(!isLike); // toggles the like state
  }

  return (
    <>
      <center>
        <div className="container" style={{ marginTop: '80px' }}>
          <button style={{ padding: '30px' }} onClick={clickhandler}>
            {isLike ? (
              <FaHeart color="red" size={40} />
            ) : (
              <FaRegHeart size={40} />
            )}
          </button>
        </div>
      </center>
    </>
  );
}

export default LikeBtn;
