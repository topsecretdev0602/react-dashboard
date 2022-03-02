import React from 'react'
import "./addUser.css"

export default function AddUser() {
  return (
    <div className="addUser">
        <h1 className="addUserTitle">Add New User</h1>
      <form className="addUserForm">
        <div className="addUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="addUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="addUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="addUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="addUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 7899" />
        </div>
        <div className="addUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="addUserItem">
          <label>Gender</label>
          <div className="addUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="addUserItem">
          <label>Active</label>
          <select className="addUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addUserButton">Create</button>
      </form>
    </div>
  )
}
