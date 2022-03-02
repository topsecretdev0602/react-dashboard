import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";

import "./app.css"

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="users" element={<Users/>}/>
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
