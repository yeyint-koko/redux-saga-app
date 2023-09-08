import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { NOTIFICATION_FAILED, NOTIFICATION_SUCCESS } from '../constants'

export interface Notification {
    NotificationId: number
    UserId: number
    UserName: string
    Title: string
    Text: string
    Nevigation: string
    IsRead: string
    TimeStamp: string
}

export interface AppState {
    notifications: Notification[]
}

const initialState: AppState = {
    notifications: [],
}

export const appSlice = createSlice({
    name: 'App',
    initialState,
    reducers: {
        clearNotifications: (state) => {
            state.notifications = []
        },
        getNotificationSuccessAction: (
            state,
            action: PayloadAction<Notification[]>
        ) => {
            state.notifications = action.payload
        },
        getNotificationErrorAction: (state, action: PayloadAction<Error>) => {
            state.notifications = []
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    clearNotifications,
    getNotificationSuccessAction,
    getNotificationErrorAction,
} = appSlice.actions

export default appSlice.reducer
