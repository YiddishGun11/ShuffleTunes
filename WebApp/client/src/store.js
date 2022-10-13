import {configureStore} from '@reduxjs/toolkit'
//import combineReducer

import musicReducer from './reducers/musicReducer'
import playlistReducer from './reducers/playlistReducer'


export default configureStore({
    reducer : {
        musicReducer : musicReducer,
        playlistReducer : playlistReducer
    },
})