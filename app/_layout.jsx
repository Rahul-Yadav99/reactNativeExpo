import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import '../global.css'
import { StatusBar } from 'expo-status-bar'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const RootLayout = () => {
    return (
        <React.Fragment>
            <StatusBar style='auto' />
            <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
                <Tabs.Screen
                    name='index'
                    options={{
                        title: 'Home page',
                        tabBarIcon: ({ color, size }) => (
                            <Entypo name="home" size={size} color={color} />
                        )
                    }}
                />
                <Tabs.Screen
                    name='about'
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome6 name="toolbox" size={size} color={color} />
                        )
                    }}
                />
                <Tabs.Screen
                    name='product'
                    options={{
                        tabBarBadge: 4,
                        tabBarBadgeStyle: {
                            backgroundColor: 'deeppink',
                            color: 'white'
                        },
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome5 name="box" size={size} color={color} />
                        )
                    }}
                />
                <Tabs.Screen
                    name='profile'
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="user" size={size} color={color} />
                        )
                    }}
                />
            </Tabs>
        </React.Fragment>
    )
}

export default RootLayout