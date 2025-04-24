import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

const index = () => {

    const data = {
        title: 'Home',
        description: 'This is the home page of the application.'
    }
    console.log(data.title)

    return (
        <View
            style={
                {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'dodgerblue'
                }
            }
        >
            <Text
                style={
                    {
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 900
                    }
                }
            >
                Welcome to the home Page.
            </Text>
        </View>
    )
}

export default index