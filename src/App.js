import "./styles.css";
import User from "./User";
import React from "react";

export default function App() {
  // ye return wale ko update krne ke liye hai,
  // let [name, setName] = React.useState("Aryan");

  return (
    <div className="App">
      <User />

      {/* ye User se apna input leke kam karega */}
      {/* <User name={name}/> */}
      {/* <button onClick={()=>setName("mittal")}>Update Name</button> */}
    </div>
  );
}
