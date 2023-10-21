import React from 'react';
import Album from '../lib/PreviewAlbum';
import Gallery from '../lib/Album';
import "./Events.css";

function Events() {
    return (
        <div className='events'>
            <div className='prev'>
                <Album />
            </div>
            <div className='album'>
                <Gallery />
            </div> 
        </div>
    )
}

export default Events;