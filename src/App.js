import React, { useState } from "react";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import { ThemeContext } from "./components/ThemeContext";
export function App(props) {
  const [theme, setTheme] = useState('light')
  function toggleTheme (){
    setTheme(prevTheme => prevTheme === 'light'? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <UseEffect />
    </ThemeContext.Provider>
  )
}
export default App;
