import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import localforage from 'localforage'
import logger from 'redux-logger'
import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage: localforage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  const store = createStore(
    persistedReducer,
    applyMiddleware(logger)
  )
  let persistor = persistStore(store)
  return { store, persistor }
};
