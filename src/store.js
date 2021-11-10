import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {combineReducers} from "redux"; 
import thunk from 'redux-thunk';
import userReducer from './reducers/user';
import mediaReducer from './reducers/media';

const reducers = combineReducers({
   user: userReducer,
   media: mediaReducer,
})

const persistConfig = {
   key: 'root',
   storage
 };
 
 const persistedReducer = persistReducer(persistConfig, reducers);
 
 const store = configureStore({
   reducer: persistedReducer,
   middleware: [thunk]
 });

 export default store;