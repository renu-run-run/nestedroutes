import { Link, useNavigate } from "react-router-dom"
import './Nav.css'
import { myContext } from './Context';
import { useContext } from 'react';
const Nav = () =>{
  const navigate = useNavigate();
  const {setIsLoggedIn}  = useContext(myContext);
    return(
        <>
          <div className="nav">
            <div id="title">React Router : Nested Routes</div>
            <div className="menu">
              <Link style={{ color: '#000', textDecoration:"none", marginLeft:"10px" }} to="/home">Home</Link>&nbsp;
              <Link style={{ color: '#000', textDecoration:"none",marginLeft:"10px"  }} to="/Technologies">Technologies</Link>&nbsp;
              <Link style={{ color: '#000', textDecoration:"none",marginLeft:"10px"  }} to="/Contact">Contact</Link>
              <button style={{padding:"0.5rem" , color:"green",marginLeft:"50px"}} onClick={()=> {setIsLoggedIn(false); navigate("/")}}>Logout</button>
            </div>
          </div>
        </>
    )
}
export default Nav