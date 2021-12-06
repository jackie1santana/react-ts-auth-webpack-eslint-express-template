import React from 'react';



// Sign Up
export const Login = () => (
  <div style={{textAlign: 'center'}}>
      <input type="email" value="" onChange={(e) => console.log(e)}/>
      <input type="password" value="" onChange={(e) => console.log(e)}/>
    <button>Login</button>
  </div>
);

