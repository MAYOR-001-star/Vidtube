import React, { useEffect, useState } from 'react';
import './Recommended.css';
import { API_KEY } from '../../Data';
import { NavLink } from 'react-router-dom';

const Recommended = ({ categoryId }) => {
    const formatViews = (views) => {
        if (views >= 1_000_000_000) return Math.floor(views / 1_000_000_000) + 'B views';
        if (views >= 1_000_000) return Math.floor(views / 1_000_000) + 'M views';
        if (views >= 1_000) return Math.floor(views / 1_000) + 'K views';
        return views + ' views';
    };

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
                const response = await fetch(videoUrl);
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                const data = await response.json();
                if (data.items?.length > 0) {
                    setApiData(data.items);
                } else {
                    console.error('No video data found');
                }
            } catch (error) {
                console.error('Error fetching video data:', error);
            }
        };
        fetchData();
    }, [categoryId]);

    return (
        <div className='recommended'>
            {apiData.map((item, index) => (
                <NavLink to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='side-video-list'>
                    <img src={item.snippet.thumbnails.medium.url} alt='thumbnail' />
                    <div className='vid-info'>
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{formatViews(item.statistics.viewCount)} views</p>
                    </div>
                </NavLink>
            ))}
        </div>
    );
};

export default Recommended;
