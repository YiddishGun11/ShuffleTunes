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

        //implémenter un systeme de fermeture de musique
        closeSong : (state) =>{
            state.song = "";
            state.display = false;
        }

    }
})

export const {setPause, setSong, setDisplay, closeSong} = musicReducer.actions;
export default musicReducer.reducer;
