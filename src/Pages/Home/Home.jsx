import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar}) => {
    const [category, setCategory] = React.useState(0)
    return (
        <div>
            <Sidebar Sidebar={sidebar} category={category} setCategory={setCategory}/>
            <div className={`container ${sidebar? "" : "large-container"}`}>
                <Feed category={category} />
            </div>
        </div>
    )
}

export default Home
