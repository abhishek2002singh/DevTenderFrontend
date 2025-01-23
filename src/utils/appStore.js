import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import feedReducer from './feedSlice'
import connectionReducer from './connectionSlice'
import requestReducer from './requstSlice'
import themeSlice from './themeSlice'



const appStore = configureStore({
    reducer:{
        theme:themeSlice,
        user : userReducer,
        feed: feedReducer,
        connections: connectionReducer,
        request:requestReducer
    },

})
export default appStore