import React from 'react'
import './SidebarItem.css'

export default function SidebarItem({ children }) {
    return (
        <div className="nav_sidebar-item">
            {children}
        </div>
    )
}
