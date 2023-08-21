"use client";

import { useEffect } from "react";

export const Hello = () => {
  console.log("Hello Page Rendered!");

  useEffect(() => {
    console.log("Hello Page useEffect!");
    throw new Error("Hello Page Error!");
  }, []);

  return <div>Hello</div>;
};
export default Hello;
