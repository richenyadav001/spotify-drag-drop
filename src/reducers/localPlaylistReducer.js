import { ADD_PLAYLIST } from '../utils/constants';

const localPlaylistReducer = (state = {}, action) => {
  const { item } = action;
  switch (action.type) {
    case ADD_PLAYLIST:
        const isExist = state.find(element => element.id === item.id);
        if(isExist) {
            return state;
        } else {
            return [...state, item];
        }
    default:
      return state;
  }
};

export default localPlaylistReducer;
