import React from 'react'
import './navbar.css'

import { Language, NotificationsNone, Settings } from '@material-ui/icons'

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navbarWrapper">
            <div className="navbarLeft">
                <span className="logo">
                    React Admin
                </span>
            </div>
            <div className="navbarRight">
                <div className="iconContainer">
                    <NotificationsNone/>
                    <span className="badge">2</span>
                </div>
                <div className="iconContainer">
                    <Language/>
                </div>
                <div className="iconContainer">
                    <Settings/>
                </div>
                <img src="https://static.simpsonswiki.com/images/b/bd/Homer_Simpson.png" alt="" className="avatar" />
            </div>
        </div>
    </div>
  )
}
