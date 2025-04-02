import React, { useEffect, useState } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import { API_KEY } from '../../Data';

const Feed = ({ category}) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const videoAPI = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
            
            const response = await fetch(videoAPI);

            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }

            const dataApi = await response.json();

            if (dataApi.items) {
                setData(dataApi.items);
            } else {
                console.warn("No items found in response:", dataApi);
                setData([]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    
    const formatViews = (views) => {
        if (views >= 1000000000) {
            return Math.floor(views / 1000000000) + 'B views';
        } else if (views >= 1000000) {
            return Math.floor(views / 1000000) + 'M views';
        } else if (views >= 1000) {
            return Math.floor(views / 1000) + 'K views';
        } else {
            return views + ' views';
        }
    };
    

    const formatPublishedDate = (publishedAt) => {
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

    return (
        <div className="feed">
            {data.map((item) => (
                <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card" key={item.id}>
                    <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>
                        {item.statistics?.viewCount ? `${formatViews(item.statistics.viewCount)} views • ` : ''}
                        {formatPublishedDate(item.snippet.publishedAt)}
                    </p>
                </Link>
            ))}
        </div>
    );
};

export default Feed;
