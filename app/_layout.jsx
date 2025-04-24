import React from 'react'
import { Tabs, useNavigation } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

const RootLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={
                    {
                        headerShown: false,
                        title: 'Home',
                        tabBarIcon: ({ color, size }) => (<FontAwesome size={size} name='home' color={color} />)
                    }
                }
            />
            <Tabs.Screen
                name='about'
                options={
                    {
                        title: 'About',
                        tabBarIcon: ({ color, size }) => (<FontAwesome size={size} name='user' color={color} />)
                    }
                }
            />
        </Tabs>
    )
}

export default RootLayout