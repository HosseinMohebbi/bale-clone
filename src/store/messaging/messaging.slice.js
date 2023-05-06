import { createSlice } from "@reduxjs/toolkit";

const messagingSlice = createSlice({
  name: "Messaging",
  initialState: {
    messages: [],
    history: {},
  },
  reducers: {
    sendMessage: (state, action) => {
      if (state.history[action.payload.dialogId]) {
        state.history[action.payload.dialogId].push({
          id: Date.now(),
          text: action.payload.text,
        });
      } else {
        state.history[action.payload.dialogId] = [
          { id: Date.now(), text: action.payload.text },
        ];
      }
    },
  },
});

export const MessagingActions = messagingSlice.actions;
export const messagingReducer = messagingSlice.reducer;
