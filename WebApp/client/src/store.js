import {configureStore} from '@reduxjs/toolkit'
//import combineReducer

import musicReducer from './reducers/musicReducer'
import playlistReducer from './reducers/playlistReducer'
import addSongReducer from './reducers/addSongReducer'


export default configureStore({
    reducer : {
        musicReducer : musicReducer,
        playlistReducer : playlistReducer,
        addSongReducer: addSongReducer
    },
})