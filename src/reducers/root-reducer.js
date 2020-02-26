import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './userReducer'
import cartReducer from './cartReducer'
import shopReducer from './shopReducer'
import directoryReducer from './directoryReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  collections: shopReducer
})

export default persistReducer(persistConfig, rootReducer)
