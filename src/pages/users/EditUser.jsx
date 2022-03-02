import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PersonAdd, PhoneAndroid } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import "./editUser.css"

export default function EditUser() {
  return (
    <div className="editUser">
      <div className="titleBar">
        <h2>Edit User</h2>
        <Link to={"/addUser/"}>
        <button className="createUser">Create</button>
        </Link>
      </div>
      <div className="userContainer">
      <div className="userProfile">
          <div className="userAvatar">
          <img
              src="https://avatarfiles.alphacoders.com/693/thumb-1920-69306.jpg"
              alt=""
              className="userInfoImage"
            />
            <div className="userInfoTitle">
              <span className="userName">Homer Simpson</span>
              <span className="userRole">Father</span>
            </div>
          </div>
          <div className="userDetails">
          <span className="userDetailsTitle">Account Details</span>
            <div className="userDetail">
              <PermIdentity className="userDetailIcon" />
              <span className="userDetailTitle">homer</span>
            </div>
            <div className="userDetail">
              <CalendarToday className="userDetailIcon" />
              <span className="userDetailTitle">10.12.1999</span>
            </div>
            <span className="userDetailsTitle">Contact Details</span>
            <div className="userDetail">
              <PhoneAndroid className="userDetailIcon" />
              <span className="userDetailTitle">+1 123 456 6789</span>
            </div>
            <div className="userDetail">
              <MailOutline className="userDetailIcon" />
              <span className="userDetailTitle">homer@simpson.com</span>
            </div>
            <div className="userDetail">
              <LocationSearching className="userDetailIcon" />
              <span className="userDetailTitle">Illinois | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="homer"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Homer Simpson"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="homer@simpson.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 6789"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Illinois | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImage"
                  src="https://avatarfiles.alphacoders.com/693/thumb-1920-69306.jpg"
                  alt=""
                />
                <label htmlFor="file">
                  <PersonAdd className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div> 
    </div>
  )
}
