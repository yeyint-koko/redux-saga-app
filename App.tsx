/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react'
import type { PropsWithChildren } from 'react'
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'

type SectionProps = PropsWithChildren<{
    title: string
}>

function Section({ children, title }: SectionProps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}
            >
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}
            >
                {children}
            </Text>
        </View>
    )
}

const App: React.FC = () => {
    const notifications = useSelector(
        (state: { app: RootState }) => state.app.notifications
    )
    const dispatch = useDispatch()
    const isDarkMode = useColorScheme() === 'dark'

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }

    useEffect(() => {
        dispatch({ type: 'NOTIFICATION_FETCH_REQUESTED', payload: {} })
    }, [])

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <View
                style={[
                    {
                        backgroundColor: isDarkMode
                            ? Colors.black
                            : Colors.white,
                    },
                    styles.container,
                ]}
            >
                <Text style={styles.highlight}>Notifications</Text>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={notifications}
                    renderItem={({ item }) => (
                        <Section key={item.NotificationId} title={item.Title}>
                            {item.Text}
                        </Section>
                    )}
                    keyExtractor={(item) => `${item.NotificationId}`}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        backgroundColor: '#fafafa',
    },
    list: {
        paddingBottom: 120,
    },
    sectionContainer: {
        marginBottom: 6,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginHorizontal: 16,
        borderRadius: 4,
        elevation: 2,
        backgroundColor: '#fff',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '500',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '400',
    },
    highlight: {
        marginHorizontal: 16,
        marginBottom: 16,
        fontSize: 16,
        fontWeight: '700',
    },
})

export default App
