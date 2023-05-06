import { createSlice } from "@reduxjs/toolkit";
import { fetchDialogs } from "./dialogs.actions";

const dialogsSlice = createSlice({
  name: "dialog",
  initialState: {
    dialogs: [],
    loading: false,
    currentDialogId: null,
  },
  reducers: {
    getDialogs: (state) => {
      state.loading = true;
    },
    setdialogs: (state, action) => {
      state.dialogs = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCurrentDialog: (state, action) => {
      state.currentDialogId = action.payload;
    },
    clearDialog: (state) => {
      state.currentDialogId = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDialogs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDialogs.fulfilled, (state, action) => {
      state.loading = false;
      state.dialogs = action.payload;
    });
    builder.addCase(fetchDialogs.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const DialogsActions = dialogsSlice.actions;
export const dialogsReducer = dialogsSlice.reducer;
