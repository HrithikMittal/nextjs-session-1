"use client";

export default function ProductItem({ children }: any) {
  console.log("I am ProductItem page RENDERING!!!", Date.now());
  return (
    <div>
      <h1>ProductItem</h1>
      {children}
    </div>
  );
}
