import React, { useState } from "react";

function Header() {
  const [counter, setCounter] = useState(0);

  return (
    <header className="text-lg bg-sky-700 text-white text-center py-10 mb-5">
      <button onClick={() => setCounter((c) => c + 1)}>Increase</button>
      <img src="" alt="logo" />
    </header>
  );
}

export default Header;
