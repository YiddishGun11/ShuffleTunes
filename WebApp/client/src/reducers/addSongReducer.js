import { createSlice } from "@reduxjs/toolkit";


const addSongReducer = createSlice({
    name : 'addSongReducer',

    initialState : {
        display : false,

        playlistId : ''
    },
    reducers : {

        getDisplay : (state, action)=>{
            state.display = action.payload;
        },

        setPlaylistId : (state, action) =>{
            state.playlistId = action.payload
        },
    }
})

export const {getDisplay, setMusicTitle, setPlaylistId} = addSongReducer.actions;
export default addSongReducer.reducer;