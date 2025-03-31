import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
    return (
        <div className='play-video'>
            <video src={video1} controls autoPlay muted></video>
            <h3>Best Youtube Channel To Learn Web Development</h3>
            <div className="play-video-info">
                <p>1525 Views &bull; 2days ago</p>
                <div>
                    <span><img src={like} alt='like'/> 125</span>
                    <span><img src={dislike} alt='dislike'/> 2</span>
                    <span><img src={share} alt='share'/> Share</span>
                    <span><img src={save} alt='like'/> Save</span>
                </div>
            </div>
            <hr />
            <div className='publisher'>
                <img src={jack} alt='publisher'/>
                <div> 
                    <p>GreatStack</p>
                    <span>1M Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className='vid-description'>
                <p>Subscribe to GreatStack to watch more tutorials on web development</p>
                <hr />
                <h4>130 Comments</h4>
                <div className="comment">
                    <img src={user_profile} alt='user-profile' />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>GreatStack is a popular YouTube channel that teaches web development through clear, beginner-friendly tutorials. Covering everything from HTML, CSS, and JavaScript to full-stack frameworks like React and Node.js, his content helps aspiring developers build real-world projects efficiently.</p>
                        <div className="comment-action">
                            <img src={like} alt="like-icon" />
                            <span>244</span>
                            <img src={dislike} alt='dislike-icon'/>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt='user-profile' />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>GreatStack is a popular YouTube channel that teaches web development through clear, beginner-friendly tutorials. Covering everything from HTML, CSS, and JavaScript to full-stack frameworks like React and Node.js, his content helps aspiring developers build real-world projects efficiently.</p>
                        <div className="comment-action">
                            <img src={like} alt="like-icon" />
                            <span>244</span>
                            <img src={dislike} alt='dislike-icon'/>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt='user-profile' />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>GreatStack is a popular YouTube channel that teaches web development through clear, beginner-friendly tutorials. Covering everything from HTML, CSS, and JavaScript to full-stack frameworks like React and Node.js, his content helps aspiring developers build real-world projects efficiently.</p>
                        <div className="comment-action">
                            <img src={like} alt="like-icon" />
                            <span>244</span>
                            <img src={dislike} alt='dislike-icon'/>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt='user-profile' />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>GreatStack is a popular YouTube channel that teaches web development through clear, beginner-friendly tutorials. Covering everything from HTML, CSS, and JavaScript to full-stack frameworks like React and Node.js, his content helps aspiring developers build real-world projects efficiently.</p>
                        <div className="comment-action">
                            <img src={like} alt="like-icon" />
                            <span>244</span>
                            <img src={dislike} alt='dislike-icon'/>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt='user-profile' />
                    <div>
                        <h3>Jack Nicholson <span>1 day ago</span></h3>
                        <p>GreatStack is a popular YouTube channel that teaches web development through clear, beginner-friendly tutorials. Covering everything from HTML, CSS, and JavaScript to full-stack frameworks like React and Node.js, his content helps aspiring developers build real-world projects efficiently.</p>
                        <div className="comment-action">
                            <img src={like} alt="like-icon" />
                            <span>244</span>
                            <img src={dislike} alt='dislike-icon'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayVideo
