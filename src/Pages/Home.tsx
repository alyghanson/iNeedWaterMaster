// Home.tsx
import React from 'react';

// renders opetions to login or register 
// TODO paths need to be created and login feature needs to be built
function Home() {
  return (
    <div>
      <h1>Welcome to iNeedWater</h1>
      <p>Login or Register to get started!!</p>
      <a href="/main"> Login</a>
      <a href="/"> Register</a> 
    </div>
  );
}

export default Home;