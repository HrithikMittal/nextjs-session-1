"use client";

import { useState } from "react";

export default function Home() {
  console.log("I am Home page RENDERING ON SERVER!!!");

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Home {count}</h1>
    </div>
  );
}

// Server component
