import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: 'search',
    initialState: {

    },
    reducers:{
        cacheResults: (state, action) => {
            // state = {...action.payload, ...state}
            state = Object.assign(state, action.payload);
        },
    },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;


/**
 * Cache - 
 * time complexity to search in array = O(n)
 * 
 * time complexity to search in map/Object = O(1)
 * 
 * 
*/