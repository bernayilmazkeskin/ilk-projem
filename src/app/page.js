"use client";
import { useState } from "react";
import LoginPage from "./login/page";
import Button from "./Components/Button";

export default function Home() {
  const [log, setLog] = useState();
  const logFn = () => {
    if (log === false) {
      setLog(true);
    
  }};
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black font-[family-name:var(--font-geist-sans)]">
     
        <LoginPage />
    </div>
  );
}
