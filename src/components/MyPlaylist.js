import React from 'react';

const MyPlaylist = (props) => {
    const { addToLocal, savedList } = props
    let localItemList;

    const onDragOver = (eve) => {
        eve.preventDefault()
    }

    const onDrop = (eve) => {
        eve.preventDefault();
        let data = {};
        const itemData = eve.dataTransfer.getData('Text');
        try {
            data = JSON.parse(itemData);
            addToLocal(data);
        } catch (err) {
            console.error(err);
        }
        console.log('On drop', eve)
    }

    if (savedList.length > 0) {
        localItemList = savedList.map((item, i) => <li className="list-items p-2" key={item.id + i}>{item.name}</li>)
    }

    return <div className="col-6 p-3">
        <h3 className="p-2">My Playlist</h3>
        <div className="min-vh-100 border border-primary">
            <ul className=" m-3 p-3" onDragOver={onDragOver} onDrop={onDrop}>
                Drop here
                {localItemList}
            </ul>
        </div>
    </div>;
};

export default MyPlaylist;
