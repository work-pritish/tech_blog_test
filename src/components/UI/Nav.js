import React, { useRef } from 'react'
import './Nav.css'
import SidebarItem from './SidebarItem'

export default function Nav() {
    const ref = useRef();
    const disableShade = () => {
        console.log(ref.current);
        ref.current.checked = false
    }

    return (
        <>
            <nav className="nav">
                <label className="nav_menu" htmlFor="menu">
                    <div className="nav_menu-lines"></div>
                    <div className="nav_menu-lines middle"></div>
                    <div className="nav_menu-lines"></div>
                </label>
                <div className="nav_logo">
                    TECHREX
            </div>
                <div className="nav_profile">YASH</div>
            </nav>
            <input type="checkbox" id="menu" ref={ref} className="nav_sidebar_input" style={{ display: "none" }} />
            <div className="nav_sidebar">
                <SidebarItem>
                    Create new blog
                </SidebarItem>
                <hr />
                <SidebarItem>
                    View previous blogs
                </SidebarItem>
                <SidebarItem>
                    Favourite Blogs
                </SidebarItem>
                <hr />
                <SidebarItem>
                    Settings
                </SidebarItem>
                <SidebarItem>
                    Logout
                </SidebarItem>
            </div>
            <div className="sidebar_shade" onClick={disableShade}></div>
        </>
    )
}
