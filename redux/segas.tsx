import { all, call, put, takeLatest } from 'redux-saga/effects'
import { NOTIFICATION_REQUESTED } from '../constants'
import { getNotifications } from './apis'
import {
    getNotificationErrorAction,
    getNotificationSuccessAction,
} from './appSlice'

function* fetchNotifications() {
    try {
        const notifications = yield call(getNotifications)
        yield put(getNotificationSuccessAction(notifications))
    } catch (e: any) {
        yield put(getNotificationErrorAction(e))
    }
}

function* notificationSaga() {
    yield takeLatest(NOTIFICATION_REQUESTED, fetchNotifications)
}

export default function* rootSaga() {
    yield all([notificationSaga()])
}
