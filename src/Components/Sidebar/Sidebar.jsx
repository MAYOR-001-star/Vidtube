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

const Sidebar = ({Sidebar, category, setCategory}) => {
    return (
        <div className={`sidebar ${Sidebar? "": "small-sidebar"}`}>
            <div className="shortcut-links">
                <div className={`side-link ${category=='22'? 'active': ''}`} onClick={()=>setCategory(22)}>
                    <img src={home} alt='home-icon'/><p>Home</p>
                </div>
                <div className={`side-link ${category=='20'? 'active': ''}`} onClick={()=>setCategory(20)}>
                    <img src={game_icon} alt='game-icon'/><p>Gaming</p>
                </div>
                <div className={`side-link ${category=='21'? 'active': ''}`} onClick={()=>setCategory(21)}>
                    <img src={automobiles} alt='automobiles-icon'/><p>Automobiles</p>
                </div>
                <div className={`side-link ${category=='24'? 'active': ''}`} onClick={()=>setCategory(24)}>
                    <img src={sports} alt='sports-icon'/><p>Sports</p>
                </div>
                <div className={`side-link ${category=='23'? 'active': ''}`} onClick={()=>setCategory(23)}>
                    <img src={entertainment} alt='entertainment-icon'/><p>Entertainment</p>
                </div>
                <div className={`side-link ${category=='25'? 'active': ''}`} onClick={()=>setCategory(25)}>
                    <img src={tech} alt='tech-icon'/><p>Technology</p>
                </div>
                <div className={`side-link ${category=='26'? 'active': ''}`} onClick={()=>setCategory(26)}>
                    <img src={music} alt='music-icon'/><p>Music</p>
                </div>
                <div className={`side-link ${category=='27'? 'active': ''}`} onClick={()=>setCategory(27)}>
                    <img src={blogs} alt='blogs-icon'/><p>Blogs</p>
                </div>
                <div className={`side-link ${category=='28'? 'active': ''}`} onClick={()=>setCategory(28)}>
                    <img src={news} alt='news-icon'/><p>News</p>
                </div>
                <hr/ >
            </div>
            <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-link" onClick={()=>setCategory(0)}>
                    <img src={jack} alt='jack-icon'/><p>PewDiePie</p>
                </div>
                {/* <div className="side-link" onClick={()=>setCategory(0)}>
                    <img src={simon} alt='simon-icon'/><p>Mr Beast</p>
                </div> */}
                {/* <div className="side-link" onClick={()=>setCategory(0)}>
                    <img src={tom} alt='tom-icon'/><p>Justin Bieber</p>
                </div> */}
                {/* <div className="side-link" onClick={()=>setCategory(0)}>
                    <img src={megan} alt='megan-icon'/><p>5-minute Crafts</p>
                </div>
                <div className="side-link" onClick={()=>setCategory(0)}>
                    <img src={cameron} alt='cameron-icon'/><p>Nas Daily</p>
                </div> */}
            </div>
        </div>
    )
}

export default Sidebar
