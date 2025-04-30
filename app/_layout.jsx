import React from 'react'
import { Tabs, useNavigation } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import '../global.css'
import Home from './index'
const RootLayout = () => {
    return (
        <>
            <Home />
        </>
    )
}

export default RootLayout