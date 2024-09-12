import { useState, useEffect } from "react";

const User = () => {
  const [count] = useState(0);

  useEffect

  return (
    <div className="user-card">
      <h1>count = {count}</h1>
      <h2>Name: Uttham</h2>
      <h3>Location: Telangana</h3>
      <h3>Contact: utthamchess@gmail.com</h3>
    </div>
  );
};

export default User;
