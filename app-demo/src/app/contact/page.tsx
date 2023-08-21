"use client";
import Button from "@/components/button";

export default function Contact() {
  console.log("I am Contact page RENDERING ON SERVER!!!", Date.now());
  return (
    <div>
      <h1>Contact</h1>
      <Button />
    </div>
  );
}
