import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import news from '../../assets/news.png'
import music from '../../assets/music.png'
import tech from '../../assets/tech.png'
import entertainment from '../../assets/entertainment.png'
import jack from '../../assets/jack.png'
import blogs from '../../assets/blogs.png'
// import simon from '../../assets/simon.png'
// import tom from '../../assets/tom.png'
// import megan from '../../assets/megan.png'
// import cameron from '../../assets/cameron.png'

const Sidebar = ({Sidebar}) => {
    return (
        <div className={`sidebar ${Sidebar? "": "small-sidebar"}`}>
            <div className="shortcut-links">
                <div className="side-link">
                    <img src={home} alt='home-icon'/><p>Home</p>
                </div>
                <div className="side-link">
                    <img src={game_icon} alt='game-icon'/><p>Gaming</p>
                </div>
                <div className="side-link">
                    <img src={automobiles} alt='automobiles-icon'/><p>Automobiles</p>
                </div>
                <div className="side-link">
                    <img src={sports} alt='sports-icon'/><p>Sports</p>
                </div>
                <div className="side-link">
                    <img src={entertainment} alt='entertainment-icon'/><p>Entertainment</p>
                </div>
                <div className="side-link">
                    <img src={tech} alt='tech-icon'/><p>Technology</p>
                </div>
                <div className="side-link">
                    <img src={music} alt='music-icon'/><p>Music</p>
                </div>
                <div className="side-link">
                    <img src={blogs} alt='blogs-icon'/><p>Blogs</p>
                </div>
                <div className="side-link">
                    <img src={news} alt='news-icon'/><p>News</p>
                </div>
                <hr/ >
            </div>
            <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-link">
                    <img src={jack} alt='jack-icon'/><p>PewDiePie</p>
                </div>
                {/* <div className="side-link">
                    <img src={simon} alt='simon-icon'/><p>Mr Beast</p>
                </div> */}
                {/* <div className="side-link">
                    <img src={tom} alt='tom-icon'/><p>Justin Bieber</p>
                </div> */}
                {/* <div className="side-link">
                    <img src={megan} alt='megan-icon'/><p>5-minute Crafts</p>
                </div>
                <div className="side-link">
                    <img src={cameron} alt='cameron-icon'/><p>Nas Daily</p>
                </div> */}
            </div>
        </div>
    )
}

export default Sidebar
