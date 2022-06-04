import { useEffect, useState } from 'react'
import styles from './SideBar.module.css'

const SideBar = ({theme, changeTheme}) => {

    
    
    useEffect(()=>{
        

        
        if(theme === 'dark'){
            setTimeout(()=>{
                changeTheme('light')
            },4000)
        }

        
        

    }, [theme])
    
    
    
    return (
        <>
            <div className={styles.sidebarCont}>{theme}</div>
            <button className={styles.btnSide} onClick={()=>changeTheme('dark')}>Cambiar theme</button>
        </>
        
    )
}

export default SideBar