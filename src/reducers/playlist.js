import { SET_PLAYLIST } from '../utils/constants';

const playlistReducer = (state = {}, action) => {
  const { playlists } = action;
  switch (action.type) {
    case SET_PLAYLIST:
      return playlists;
    default:
      return state;
  }
};

export default playlistReducer;
