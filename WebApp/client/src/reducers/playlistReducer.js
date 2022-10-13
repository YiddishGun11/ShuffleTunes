import { createSlice } from "@reduxjs/toolkit";

const playlistReducer = createSlice({
    name : 'playlistReducer',
    initialState : {
        display : 0,

        listDisplay : '',
    },
    reducers : {

        playlistDisplay : (state, action) =>{
            state.display = action.payload;
        },

        miniListDisplay : (state, action) =>{
            state.listDisplay = action.payload;
        }
    }
})

export const {playlistDisplay, miniListDisplay} = playlistReducer.actions;
export default playlistReducer.reducer;