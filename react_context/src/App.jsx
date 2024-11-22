import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Family/Child'
import ThemeContext from './ThemeContext'
import NavBar from './NavBar'
import ThemeProvider from './ThemeProvider'

function App() {

  // const [themeColor, setThemeColor] = useState('purple')
  // const toggleTheme = () => {
  //   setThemeColor(color => color === 'purple' ? 'teal' : 'purple')
  // }
  return (
    <>
    <div className="App">
      {/* <ThemeContext.Provider value={themeColor}>
        <NavBar />
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Child />
      </ThemeContext.Provider> */}
      {/* in order to not have ThemeContext.Provider in our App component as in the example above we create a ThemeProvider component */}
      <ThemeProvider>
        <NavBar />
        <Child />
      </ThemeProvider>    
    </div>
    </>
  )
}

export default App
