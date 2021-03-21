import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import playlistReducer from '../reducers/playlist';
import localPlaylistReducer from '../reducers/localPlaylistReducer';
import { loadState, saveState } from '../utils/utility';

const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialLocalPlaylistState = {
    localPlaylist: persistedState
};

const store = createStore(
    combineReducers({
        playlist: playlistReducer,
        localPlaylist: localPlaylistReducer
    }),
    initialLocalPlaylistState,
    composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
    saveState(store.getState().localPlaylist);
});

export default store;
