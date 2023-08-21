"use client";

const Error = ({ error, reset }: any) => {
  console.log("Error Component");
  return (
    <div>
      <h1>404</h1>
      <p>Item Component not found {error?.message}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Error;
