import React from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'

const Feed = () => {
    const feedData = [
        {
            feedTitle: 'Top resources to become a web developer',
            feedImage: thumbnail1,
            feedAuthor: "CodeAcademy",
            feedContent: '25k views • 3 days ago',
        },
        {
            feedTitle: 'Master JavaScript in 30 days',
            feedImage: thumbnail2,
            feedAuthor: "JavaScript Mastery",
            feedContent: '40k views • 1 week ago',
        },
        {
            feedTitle: 'CSS Tricks You Need to Know',
            feedImage: thumbnail3,
            feedAuthor: "Design Wizard",
            feedContent: '18k views • 5 days ago',
        },
        {
            feedTitle: 'React.js Crash Course',
            feedImage: thumbnail4,
            feedAuthor: "Traversy Media",
            feedContent: '55k views • 2 weeks ago',
        },
        {
            feedTitle: 'The Future of Frontend Development',
            feedImage: thumbnail5,
            feedAuthor: "Fireship",
            feedContent: '33k views • 4 days ago',
        },
        {
            feedTitle: 'How to Build Fullstack Projects',
            feedImage: thumbnail6,
            feedAuthor: "The Net Ninja",
            feedContent: '60k views • 6 days ago',
        },
        {
            feedTitle: 'GitHub Tips for Developers',
            feedImage: thumbnail7,
            feedAuthor: "Dev Ed",
            feedContent: '22k views • 1 week ago',
        },
        {
            feedTitle: 'VS Code Shortcuts & Tricks',
            feedImage: thumbnail8,
            feedAuthor: "Academind",
            feedContent: '30k views • 3 days ago',
        },
        {
            feedTitle: '10 Must-Know JavaScript Tricks',
            feedImage: thumbnail1,
            feedAuthor: "Web Dev Simplified",
            feedContent: '50k views • 4 days ago',
        },
        {
            feedTitle: 'Learn HTML & CSS in One Video',
            feedImage: thumbnail2,
            feedAuthor: "Programming with Mosh",
            feedContent: '120k views • 1 week ago',
        },
        {
            feedTitle: 'React vs Vue: Which One Should You Learn?',
            feedImage: thumbnail3,
            feedAuthor: "The Net Ninja",
            feedContent: '35k views • 3 days ago',
        },
        {
            feedTitle: 'Mastering Tailwind CSS',
            feedImage: thumbnail4,
            feedAuthor: "Kevin Powell",
            feedContent: '29k views • 2 days ago',
        },
        {
            feedTitle: 'Build a Fullstack App with Next.js',
            feedImage: thumbnail5,
            feedAuthor: "Traversy Media",
            feedContent: '75k views • 1 week ago',
        },
        {
            feedTitle: 'How to Land Your First Developer Job',
            feedImage: thumbnail6,
            feedAuthor: "Danny Thompson",
            feedContent: '90k views • 5 days ago',
        },
        {
            feedTitle: 'Node.js for Beginners',
            feedImage: thumbnail7,
            feedAuthor: "Codevolution",
            feedContent: '44k views • 6 days ago',
        },
        {
            feedTitle: 'The Ultimate GitHub Guide',
            feedImage: thumbnail8,
            feedAuthor: "Academind",
            feedContent: '60k views • 2 weeks ago',
        },
    ];
    
    return (
        <div className="feed">
            {
                feedData.map((item, index)=>{
                    return(
                        <div className='card' key={index}>
                            <img src={item.feedImage} alt={item.feedContent}/>
                            <h2>{item.feedTitle}</h2>
                            <h3>{item.feedAuthor}</h3>
                            <p>{item.feedContent}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Feed
