import {createSlice} from '@reduxjs/toolkit'

const musicReducer = createSlice({
    name : "musicReducer",
    initialState : {
        display : false,
        song : "",
    },
    reducers : {

        setDisplay : (state, action) =>{
            if(action.payload === "open"){
                state.display = true;
            }
        },
        setSong : (state, action) =>{
            state.song = action.payload;
        },

    }
})

export const {setPause, setSong, setDisplay} = musicReducer.actions;
export default musicReducer.reducer;