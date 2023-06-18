import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
      
        <nav>
          
            <ul>

            
       <Link to="/">About Us</Link>
       <Link to="/Hill">Hill</Link>
       <Link to="/Temples">Temples</Link>
       <Link to="/Watterfalls">Watterfalls</Link>
       
       </ul>
        </nav>
    
    </div>
  )
}
export default Navbar