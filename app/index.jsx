import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router';

const index = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1)
    };
    const val = true
    return (
        <View style={{ backgroundColor: 'gray', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Count {count}</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={increaseCount} style={{ backgroundColor: 'dodgerblue', paddingVertical: 10, paddingHorizontal: 20 }}>
                <Text style={{ color: 'white' }}>Increase Count</Text>
            </TouchableOpacity>
            <Link href={"/about"}>
                <Text>Go to about page</Text>
            </Link>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab molestiae incidunt!</Text>
        </View>
    )
}

export default index