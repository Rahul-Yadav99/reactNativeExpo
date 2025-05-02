import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Redirect, Stack, Tabs } from 'expo-router'
import '../global.css'
const RootLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'index'
                }}
            />
            <Tabs.Screen
                name='second'
                options={{
                    title: 'Second'
                }}
            />
            <Tabs.Screen
                name='third'
                options={{
                    title: 'Third'
                }}
            />
        </Tabs>
    )
}

export default RootLayout