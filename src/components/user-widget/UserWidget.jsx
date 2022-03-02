import { Visibility } from '@material-ui/icons'
import React from 'react'
import "./userWidget.css"


export default function UserWidget() {
  return (
    <div className="userWidget">
        <span className="title">New Users</span>
        <ul className="userList">
            <li className="userListItem">
                <div className="user">
                    <img src="https://avatarfiles.alphacoders.com/693/thumb-1920-69306.jpg" alt="" className="userImage" />
                    <div className="userInfo">
                        <span className="userName">Homer Simpson</span>
                        <span className="userRole">Father</span>
                    </div>
                </div>
                <button className="userShow">
                    <Visibility className="userShowIcon"/>
                    Show User
                </button>
            </li>
            <li className="userListItem">
                <div className="user">
                    <img src="https://static.simpsonswiki.com/images/0/0b/Marge_Simpson.png" alt="" className="userImage" />
                    <div className="userInfo">
                        <span className="userName">Marge Simpson</span>
                        <span className="userRole">Mother</span>
                    </div>
                </div>                
                <button className="userShow">
                    <Visibility className="userShowIcon"/>
                    Show User
                </button>
            </li>
            <li className="userListItem">
                <div className="user">
                    <img src="https://static.simpsonswiki.com/images/6/65/Bart_Simpson.png" alt="" className="userImage" />
                    <div className="userInfo">
                        <span className="userName">Bart Simpson</span>
                        <span className="userRole">Son</span>
                    </div>
                </div>
                <button className="userShow">
                    <Visibility className="userShowIcon"/>
                    Show User
                </button>
            </li>
            <li className="userListItem">
                <div className="user">
                    <img src="https://static.simpsonswiki.com/images/e/ec/Lisa_Simpson.png" alt="" className="userImage" />
                    <div className="userInfo">
                        <span className="userName">Lisa Simpson</span>
                        <span className="userRole">Daughter</span>
                    </div>
                </div>
                <button className="userShow">
                    <Visibility className="userShowIcon"/>
                    Show User
                </button>
            </li>
        </ul>
    </div>
  )
}
