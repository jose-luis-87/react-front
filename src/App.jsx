import { useState } from 'react'
import stylesApp from './App.module.css'
import LayoutGral from './layouts/LayoutGral'
import SideBar from './modules/SideBar'

const App = () => {
  
  const [theme, setTheme] = useState('light')

  return (
    <div className={stylesApp.App}>
      <LayoutGral >
        <SideBar theme={theme} changeTheme={setTheme}/>
      </LayoutGral>
    </div>
  )
}

export default App
