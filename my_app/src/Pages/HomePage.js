import React from 'react';
import videoBg from '../assets/HomePageBackgroundVideo.mp4';
import "./HomePage.css";

function HomePage() {

    const VideoBg = () => {
        return (
            <div className='videobg'>
                <video src={videoBg} autoPlay loop muted />
            </div>
        )
    }

    return (
        <div className='mainHomePage'>
            <VideoBg />
            <div className='hpcontents'>
                <h1>Welcome to My Calendar</h1> 
                <p>Events for Young Adults</p>
            </div>
        </div>
    )
}

export default HomePage;