import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.png'

const PlayVideo = () => {
    return (
        <div className='play-video'>
            <video src={video1} controls autoPlay muted></video>
            <h3>Best Youtube Channel To Learn Web Development</h3>
            <div>
                <p>1525 Views &bull; 2days ago</p>
                <div>
                    <span><img src={like} alt='like'/> 125</span>
                    <span><img src={dislike} alt='dislike'/> 2</span>
                    <span><img src={share} alt='share'/> share</span>
                    <span><img src={like} alt='like'/> 125</span>
                    <span><img src={like} alt='like'/> 125</span>
                </div>
            </div>
        </div>
    )
}

export default PlayVideo
