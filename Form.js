import React from "react";
import { useState } from "react";

export const Login = () => {
  const [nick, setNick] = useState("");
  const [pass, setPass] = useState("");
  


  const handleNick = (event) => {
    setNick(event.target.value);
  };

  const handlePass = (event) => {
    setPass(event.target.value);
  };
  const handleReset = () => {
    setNick("");
    setPass("");
  };


  return (
    <div>
      <label>Nickname</label>
      <input
        type="text"
        placeholder="user"
        value={nick}
        onChange={handleNick}
      ></input>
      <label> Password </label>
      <input
        type="password"
        placeholder="pass"
        value={pass}
        onChange={handlePass}
      ></input>
      <button >Submit</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
