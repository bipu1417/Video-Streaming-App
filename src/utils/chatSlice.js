import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVCHAT } from "./constants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {messages: []},
    reducers: {
        addMessage: (state, action) => {
            if(state.messages.length > 200)
                state.messages.splice(OFFSET_LIVCHAT, 1);
            state.messages.unshift(action.payload);
        },
    },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;