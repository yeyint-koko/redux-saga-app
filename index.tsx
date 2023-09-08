/**
 * @format
 */

import { AppRegistry, Text, View } from 'react-native'
import Main from './App'
import { name as appName } from './app.json'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const App = () => {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => App)
