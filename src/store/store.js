import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { messagingReducer } from './messaging/messaging.slice'
import { dialogsReducer } from './dialogs/dialogs.slice'



export const store = configureStore({
    reducer: {
        messaging: messagingReducer,
        dialogs: dialogsReducer,
    },
  })

  