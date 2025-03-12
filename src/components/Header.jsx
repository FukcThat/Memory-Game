import Rules from "./Rules";
import { useState } from "react";
import "/src/styles/Header.css";

export default function Header() {
  const [showRules, setShowRules] = useState(false);

  return (
    <div className="header">
      <div>{/* Logo onclick back to home*/}</div>

      <button className="rules-btn" onClick={() => setShowRules(!showRules)}>
        {showRules ? "x" : "?"}
      </button>
      {showRules && <Rules />}
    </div>
  );
}
