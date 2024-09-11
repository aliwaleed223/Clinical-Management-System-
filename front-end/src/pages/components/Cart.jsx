import React from 'react';

function Cart({ ImgLink, Text }) {
  return (
    <div className="cart ">
      <img src={ImgLink} alt="wiat" />
      <p>{Text}</p>
    </div>
  );
}

export default Cart;
