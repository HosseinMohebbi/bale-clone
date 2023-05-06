import { DialogsActions } from "./dialogs.slice";
import { fakeDialogs } from "../../data/Dialogs";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { delay } from "../../utils/time";

// export const fetchDialogs = () => {
//   return async (dispatch) => {
//     dispatch(DialogsActions.getDialogs());
//     setTimeout(() => {
//         console.log(fakeDialogs());
//       dispatch(DialogsActions.setdialogs(fakeDialogs()));
//       dispatch(DialogsActions.setLoading(false));
//     }, Math.floor(Math.random() * 5000));
//   };
// };

export const fetchDialogs = createAsyncThunk(
  "dialog/fetchDialogs",
  async (_, {dispatch}) => {
    // setTimeout(() => {
    //   dispatch(DialogsActions.setdialogs(fakeDialogs()));
    //   dispatch(DialogsActions.setLoading(false));
    // }, Math.floor(Math.random() * 5000));
    await delay(Math.floor(Math.random() * 5000))
    return fakeDialogs();
  }
);


