import React,{useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link, useNavigate} from 'react-router-dom'
import {sidebar } from './Sidebar';
import '../Components/Navbar.css';
import { IconContext } from 'react-icons';
import { useAuth } from '../utils/loginContaxt';
function Navbar() {
    const [sidebar1,setSidebar] = useState(false)
    const [currentuser, setCurrentUser] = useState();
    const showSidebar=()=>setSidebar(!sidebar1)
    const auth = useAuth();
    const navigate = useNavigate();
    const logoutUser = ()=>{
        auth.logout();
        navigate('/login');
    }

  return (
    <div>   
        { auth.user ? 
            <IconContext.Provider value={{color:'#fff'}}>
                <div className="navbar">
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                    <div className="head1">
                        <h1 className='heading' style={{"textTransform":"uppercase"}}>{auth.usertype}</h1>
                    </div>
                </div>
                <nav className={sidebar1 ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                            {sidebar(auth.usertype).map((item,index)=>{
                                return(
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icons}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        <div className="signout">
                        <button className='logout'  type="submit" onClick={logoutUser}>Logout</button>
                        </div>
                    </ul>
                </nav>
            </IconContext.Provider> :
            <></>
        }
    </div>
  )
    }

export default Navbar