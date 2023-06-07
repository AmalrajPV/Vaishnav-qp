import React,{useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom'
import {sidebar } from './Sidebar';
import '../Components/Navbar.css';
import { IconContext } from 'react-icons';
function Navbar() {
    const [sidebar1,setSidebar] = useState(false)
    const showSidebar=()=>setSidebar(!sidebar1)
    const user = 'level officer';
    const login = true;
  return (
    <div>   
        { login ? 
            <IconContext.Provider value={{color:'#fff'}}>
                <div className="navbar">
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                    <div className="head1">
                        <h1 className='heading'>{user}</h1>
                    </div>
                </div>
                <nav className={sidebar1 ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                            {sidebar(user).map((item,index)=>{
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
                        <button className='logout'  type="submit">Logout</button>
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