import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getPlaylist, addToLocalList } from '../actions/result';
import Header from './Header';
import Loader from './Loader';
import MyPlaylist from './MyPlaylist';
import SoptifyPlayList from './SpotifyPlaylist';


const Dashboard = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchFor, setGetData] = useState('');
    const { isValidSession } = props;

    const { playlist, localPlaylist } = props;
    const result = { playlist };

    const getResult = (event) => {
        event.preventDefault();
        props.dispatch(getPlaylist(searchFor)).then(() => {
            setIsLoading(false);
        });
    }

    const handleChange = (e) => {
        e.preventDefault();
        setGetData(e.target.value)
    }

    const addToLocal = (item) => {
        props.dispatch(addToLocalList(item))
    }

    return (
        <React.Fragment>
            {isValidSession() ? (
                <React.Fragment>
                    <Header />
                    <Loader show={isLoading}>Loading...</Loader>
                    <div>
                        <form onSubmit={getResult}>
                            <label>
                                <input type="text" value={searchFor} onChange={handleChange} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                    <div className="row">
                        <SoptifyPlayList result={result} />
                        <MyPlaylist addToLocal={addToLocal} savedList={localPlaylist} />
                    </div>
                </React.Fragment>
            ) : (
                <Redirect
                    to={{
                        pathname: '/',
                        state: {
                            session_expired: true
                        }
                    }}
                />
            )}
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        playlist: state.playlist,
        localPlaylist: state.localPlaylist
    };
};

export default connect(mapStateToProps)(Dashboard);
