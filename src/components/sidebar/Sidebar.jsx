import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, Home, Loyalty, MailOutline, PermIdentity, Report, Storefront, TrendingUp, WorkOutline } from '@material-ui/icons'
import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="menu">
                <h4 className="title">Dashboard</h4>
                <ul className="list">
                    <li className="listItem active">
                        <Home/>
                        Home
                    </li>
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
                    <li className="listItem">
                        <PermIdentity/>
                        Users
                    </li>
                    <li className="listItem">
                        <Storefront/>
                        Products
                    </li>
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
