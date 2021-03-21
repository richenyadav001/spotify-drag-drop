import React from 'react';

const SoptifyPlayList = (props) => {
    const { result } = props;
    let playlistItems = '';
    const { playlist } = result;

    if(Object.keys(playlist).length > 1) {
        playlistItems = playlist.items.map((item) => <li onDragStart={(e)=> {e.dataTransfer.setData("text/plain", JSON.stringify(item))}} draggable className="list-items p-2" key={item.id}>{item.name}</li>)
    }
    
    return <div className="col-6 p-3">
        <h3 className="p-2">Spotify Playlist</h3>
        <ul>{playlistItems}</ul>
    </div>;
};

export default SoptifyPlayList;
