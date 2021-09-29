import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers'


// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// const persistConfig = {
//     key: 'root',
//     storage,
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer)


export default function storeConfig(initialStore) { createStore(rootReducer, initialStore, composeWithDevTools(applyMiddleware(thunk)), window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION({trace: true}))}
// export default (initialStore) => {
//     let store = createStore(persistedReducer, initialStore, composeWithDevTools(applyMiddleware(thunk)), window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION({trace: true}))
//     let persistor = persistStore(store)
//     return { store, persistor }
// }
// const store= createStore(rootReducer, initialStore, composeWithDevTools(applyMiddleware(thunk)), window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION({trace: true}))
