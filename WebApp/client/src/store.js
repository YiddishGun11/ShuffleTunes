import {configureStore} from '@reduxjs/toolkit'
//import combineReducer

import musicReducer from './reducers/musicReducer'


export default configureStore({
    reducer : {
        musicReducer : musicReducer
    },
})