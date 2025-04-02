import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import { API_KEY } from '../../Data';

const PlayVideo = ({ videoId }) => {
    const [apiData, setApiData] = useState(null);
    const [channel, setChannel] = useState(null);
    const [comments, setComments] = useState([]);

    // Format view count
    const formatViews = (views) => {
        if (!views) return '0 views';
        if (views >= 1e9) return Math.floor(views / 1e9) + 'B views';
        if (views >= 1e6) return Math.floor(views / 1e6) + 'M views';
        if (views >= 1e3) return Math.floor(views / 1e3) + 'K views';
        return views + ' views';
    };

    // Format publish date
    const formatPublishedDate = (publishedAt) => {
        if (!publishedAt) return 'Unknown date';
        const publishedDate = new Date(publishedAt);
        const now = new Date();
        const diffInSeconds = Math.floor((now - publishedDate) / 1000);

        if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
        if (diffInSeconds < 7 * 86400) return `${Math.floor(diffInSeconds / 86400)} days ago`;
        if (diffInSeconds < 30 * 86400) return `${Math.floor(diffInSeconds / (7 * 86400))} weeks ago`;
        return `${Math.floor(diffInSeconds / (30 * 86400))} months ago`;
    };

    // Fetch Video Data
    useEffect(() => {
        if (!videoId) return;
        const fetchData = async () => {
            try {
                const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
                const response = await fetch(videoUrl);
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                const data = await response.json();
                if (data.items?.length > 0) {
                    setApiData(data.items[0]);
                } else {
                    console.error('No video data found');
                }
            } catch (error) {
                console.error('Error fetching video data:', error);
            }
        };
        fetchData();
    }, [videoId]);

    // Fetch Channel Data (only when `apiData` is available)
    useEffect(() => {
        if (!apiData?.snippet?.channelId) return;
        const fetchChannel = async () => {
            try {
                const channelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
                const response = await fetch(channelUrl);
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                const data = await response.json();
                if (data.items?.length > 0) {
                    setChannel(data.items[0]);
                } else {
                    console.error('No channel data found');
                }
            } catch (error) {
                console.error('Error fetching channel data:', error);
            }
        };
        fetchChannel();
    }, [apiData]);

    // Fetch Comments
    useEffect(() => {
        if (!videoId) return;
        const fetchComments = async () => {
            try {
                const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
                const response = await fetch(commentUrl);
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                const data = await response.json();
                setComments(data.items || []);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };
        fetchComments();
    }, [videoId]);

    return (
        <div className='play-video'>
            <iframe 
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>

            <h3>{apiData?.snippet?.title || 'Title Here'}</h3>

            <div className="play-video-info">
                <p>
                    {apiData?.statistics?.viewCount && `${formatViews(apiData.statistics.viewCount)} • `}
                    {apiData?.snippet?.publishedAt && formatPublishedDate(apiData.snippet.publishedAt)}
                </p>
                <div>
                    <span><img src={like} alt='like'/> 125</span>
                    <span><img src={dislike} alt='dislike'/> 2</span>
                    <span><img src={share} alt='share'/> Share</span>
                    <span><img src={save} alt='like'/> Save</span>
                </div>
            </div>
            
            <hr />

            <div className='publisher'>
                <img src={channel?.snippet?.thumbnails?.default?.url || ''} alt='publisher'/>
                <div> 
                    <p>{channel?.snippet?.title || 'Channel Name'}</p>
                    <span>{formatViews(channel?.statistics?.subscriberCount) || '0'} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>

            <div className='vid-description'>
                <p>{channel?.snippet?.description?.slice(0, 250) || 'Description Here'}</p>
                <hr />
                <h4>{formatViews(apiData?.statistics?.commentCount) || "0"} Comments</h4>

                {comments.length > 0 ? comments.map((item) => (
                    <div className="comment" key={item.id}>
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt='user-profile' />
                        <div>
                            <h3>
                                {item.snippet.topLevelComment.snippet.authorDisplayName} 
                                <span>{formatPublishedDate(item.snippet.topLevelComment.snippet.publishedAt)}</span>
                            </h3>
                            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                            <div className="comment-action">
                                <img src={like} alt="like-icon" />
                                <span>{formatViews(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                <img src={dislike} alt='dislike-icon'/>
                            </div>
                        </div>
                    </div>
                )) : <p>No comments available</p>}
            </div>
        </div>
    );
};

export default PlayVideo;
