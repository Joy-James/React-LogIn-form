// ChildComponent.js
import React, { useContext } from "react";
import ThemeContext from "./themecontext";

function ChildComponent() {
  const theme = useContext(ThemeContext);

  return <div className={`child-component ${theme}`}>Child Component</div>;
}

export default ChildComponent;
