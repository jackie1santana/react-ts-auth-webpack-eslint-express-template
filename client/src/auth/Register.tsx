import React from 'react';



// Sign Up
export const Register = () => (
  <div style={{textAlign: 'center'}}>
      <input type="email" value="" onChange={(e) => console.log(e)}/>
      <input type="password" value="" onChange={(e) => console.log(e)}/>
    <button>Submit to Sign Up</button>
  </div>
);
