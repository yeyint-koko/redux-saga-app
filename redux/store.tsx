import { configureStore, applyMiddleware, createStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import mySaga from './segas'
import appReducer, { AppState } from './appSlice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        app: appReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(mySaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = AppState
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
