import React, { useState } from "react";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import { ThemeContext } from "./components/ThemeContext";
import UseReducer from "./components/UseReducer";
import UseCallback from "./components/UseCallback";
import UseMemo from "./components/UseMemo";
import UseRef from "./components/UseRef";
import CustomHook1 from "./components/CustomHook1";
import CustomHook2 from "./components/CustomHook2";
export function App(props) {
  const [theme, setTheme] = useState('light')
  function toggleTheme (){
    setTheme(prevTheme => prevTheme === 'light'? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {/* <UseEffect /> */}
      {/* <UseReducer/> */}
      {/* <UseCallback/> */}
      {/* <UseMemo/> */}
      {/* <UseRef/> */}
      <CustomHook1/>
      <CustomHook2/>
    </ThemeContext.Provider>
  )
}
export default App;
