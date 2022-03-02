import React from 'react'
import "./sidebar.css"

import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, Home, Loyalty, MailOutline, PermIdentity, Report, Storefront, TrendingUp, WorkOutline } from '@material-ui/icons'
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="menu">
                <h4 className="title">Dashboard</h4>
                <ul className="list">
                    <Link to="/" className="link">
                    <li className="listItem active">
                        <Home/>
                        Home
                    </li>
                    </Link>
                    <li className="listItem">
                        <TrendingUp/>
                        Analytics
                    </li>
                    <li className="listItem">
                        <Loyalty/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="menu">
                <h4 className="title">Shortcuts</h4>
                <ul className="list">
                    <Link to="/users" className="link">
                    <li className="listItem">
                        <PermIdentity/>
                        Users
                    </li>
                    </Link>
                    <Link to="/Products" className="link">
                    <li className="listItem">
                        <Storefront/>
                        Products
                    </li>
                    </Link>
                    <li className="listItem">
                        <AttachMoney/>
                        Transactions
                    </li>
                    <li className="listItem">
                        <BarChart/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="menu">
                <h4 className="title">Notifications</h4>
                <ul className="list">
                    <li className="listItem">
                        <MailOutline/>
                        Mail
                    </li>
                    <li className="listItem">
                        <DynamicFeed/>
                        Feedback
                    </li>
                    <li className="listItem">
                        <ChatBubbleOutline/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="menu">
                <h4 className="title">Staff</h4>
                <ul className="list">
                    <li className="listItem">
                        <WorkOutline/>
                        Manage
                    </li>
                    <li className="listItem">
                        <Report/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
