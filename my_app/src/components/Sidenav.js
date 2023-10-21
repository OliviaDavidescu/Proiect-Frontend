import styles from "./Sidenav.module.css"
import { NavLink } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { sideBarData } from "../lib/SideBarData";
import { useState } from "react";

export default function Sidenav() {
    const [sideBar, setSideBar] = useState(false)
    const showSidebar = () => {
        setSideBar(!sideBar)
    }
    return (
        <div className={sideBar ? styles.sidenav : styles.sidenavClosed}>
            <button className={styles.menuBtn} onClick={showSidebar}>
                {sideBar? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
            </button>
            {sideBarData.map(item =>{
                return  <NavLink key={item.id} className={styles.sideitem} to={item.link}>
                            {item.icon}
                            <span className={styles.linkText}>{item.text}</span>
                        </NavLink>
            })}
        </div>
  )
}