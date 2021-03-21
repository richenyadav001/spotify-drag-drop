import { SET_PLAYLIST, ADD_PLAYLIST } from '../utils/constants';
import { doRequest } from '../utils/dataService';

export const setPlayList = (playlists) => ({
    type: SET_PLAYLIST,
    playlists
});

export const addPlayist = (item) => ({
    type: ADD_PLAYLIST,
    item
});

export const getPlaylist = (searchFor) => {
    return async (dispatch) => {
        try {
            const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(searchFor)}&type=playlist`;
            const result = await doRequest(API_URL, 'GET');
            const { playlists } = result;
            console.log(playlists);
            return dispatch(setPlayList(playlists));
        } catch (error) {
            console.log('error', error);
        }
    };
};

export const addToLocalList = (item) => {
    return async (dispatch) => {
        try {
            return dispatch(addPlayist(item));
        } catch (error) {
            console.log('error', error);
        }
    };
};
