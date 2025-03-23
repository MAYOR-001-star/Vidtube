import React from 'react'
import './Navbar.css'
import menuIcon from '../../Assets/menu.png'
import logo from '../../Assets/logo.png'
import search from '../../Assets/search.png'
import notificationIcon from '../../Assets/notification.png'
import profileIcon from '../../Assets/jack.png'
import uploadIcon from '../../Assets/upload.png'
import moreIcon from '../../Assets/more.png'


const Navbar = () => {
    return (
        <div>
            <nav>
                <div className='nav-left flex-div'>
                    <img className='menu-logo' src={menuIcon} alt='menu-logo' />
                    <img className='logo' src={logo} alt='logo' />
                </div>
                <div className="nav-middle flex-div">
                    <div className="search-box div-flex">
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
