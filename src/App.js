import "./App.css";
import Form from "./components/form";

// App.js
import React, { useState } from "react";
import ThemeContext from "./themecontext";
import "./App.css";
import ChildComponent from "./childComponent";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`container ${theme}`}>
      <ThemeContext.Provider value={theme}>
      </ThemeContext.Provider>
    
      <Form/>
        <button className="toogle" onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
