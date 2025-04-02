import React from 'react'
import './Navbar.css'
import menuIcon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import notificationIcon from '../../assets/notification.png'
import profileIcon from '../../assets/jack.png'
import uploadIcon from '../../assets/upload.png'
import moreIcon from '../../assets/more.png'
import { Link } from 'react-router-dom'


const Navbar = ({setSidebar}) => {
    return (
        <div>
            <nav>
                <div className='nav-left flex-div'>
                    <img className='menu-logo' src={menuIcon} alt='menu-logo' onClick={()=>setSidebar(prev=>!prev)} />
                    <Link to='/'><img className='logo' src={logo} alt='logo' /></Link>
                </div>
                <div className="nav-middle flex-div">
                    <div className="search-box flex-div">
                        <input type="text" placeholder="Search" />
                        <img className='search' src={search} alt='search-logo'/>
                    </div>
                </div>
                <div className="nav-right flex-div">
                    <img src={uploadIcon} alt="upload-icon" />
                    <img src={moreIcon} alt="more-icon" />
                    <img src={notificationIcon} alt="notification-icon" />
                    <img src={profileIcon} alt="profile-icon" className='user-icon' />
                </div>
            </nav>
        </div>
    )
}

export default Navbar
