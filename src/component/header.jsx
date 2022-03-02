import React, { useState } from "react";

const Header = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{
      display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"
    }}>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  );
};

export default Header;
