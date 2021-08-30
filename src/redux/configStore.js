import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import productReducer from './productSlide';
import rootSaga from '../saga';
const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];


const rootReducer = {
    products: productReducer
}

const store = configureStore({
    reducer: rootReducer,
    middleware
})
sagaMiddleware.run(rootSaga);

export default store;