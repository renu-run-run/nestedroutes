import { Link, Outlet } from 'react-router-dom';
import './Technologies.css'

const Technologies = () =>{
    return(
        <>
           <div className="tech-container">
              <div className="left-panel">
                 <Link style={{ color: '#FFF', textDecoration:"none" }} to="html">HTML</Link>
                 <Link style={{ color: '#FFF', textDecoration:"none" }} to="css">CSS</Link>
                 <Link style={{ color: '#FFF', textDecoration:"none" }} to="js">JavaScript</Link>
                 <Link style={{ color: '#FFF', textDecoration:"none" }} to="react">REACT</Link>
              </div>
              <div className="right-panel">
               <Outlet/>
              </div>
           </div>
        </>
    )
}

export default Technologies;