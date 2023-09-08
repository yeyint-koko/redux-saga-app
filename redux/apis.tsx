import { Apis, Token } from '../constants'

export const getNotifications = () => {
    const url = Apis.getNotification
    return fetch(url, { headers: { Authorization: Token } })
        .then((res) => res.json())
        .then((res) => res)
        .catch((err) => err)
}
