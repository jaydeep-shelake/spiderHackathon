import React from 'react'
import '../styles/sidebar.css'
import {FaHome,FaBoxOpen,FaPizzaSlice,FaTimes} from 'react-icons/fa'
import {BsHeartHalf,BsGear} from 'react-icons/bs'
import {CgFileDocument} from 'react-icons/cg'
import { Link,useLocation } from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { showSideBar } from '../actions'
import { useDispatch } from 'react-redux'
const SideBar = () => {
     
       const show =useSelector(state=>state.sidebar.show)
       const dispatch =useDispatch()
       const location =useLocation()
       const path =location.pathname

   
    return (
        <div className={`sidebar  ${show&&'showSideBar'}`}  >
            <div className="close" onClick={()=>dispatch(showSideBar(false))}>
                <FaTimes/>
            </div>
            <div className="top-icons">
            <Link to="/"><div className={`icon ${path==='/'&&'active'}`}>
                <FaHome/>
            </div></Link>
            <Link to="/"><div className={`icon ${path==='/orders'&&'active'}`}>
                <FaBoxOpen/>
            </div></Link>
            <Link to='/'> <div className={`icon ${path==='/wishlist'&&'active'}`}>
                <BsHeartHalf/>
            </div></Link>
           <Link to="/"> <div className={`icon ${path==='/your-address'&&'active'}`}>
                <CgFileDocument/>
            </div></Link>
            <Link to='/custom-pizza'><div className={`icon ${path==='/custom-pizza'&&'active'}`} >
                <FaPizzaSlice/>
            </div></Link>
            <Link to='/'><div className={`icon ${path==='/profile'&&'active'}`}>
                <BsGear/>
            </div></Link>
            </div>
            <div className="bottom-icon">
          <div className="icon" >
            <FiLogOut/>
            </div>
            </div>
        </div>
    )
}

export default SideBar
