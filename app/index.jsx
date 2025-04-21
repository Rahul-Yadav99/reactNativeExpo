import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const index = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1)
    };
    const val = true
    return (
        <View>
            <Text>Count {count}</Text>
            <TouchableOpacity activeOpacity={0.7} disabled={val} onPress={increaseCount} style={{ backgroundColor: 'dodgerblue', paddingHorizontal: 30, width: 200, paddingVertical: 10 }}>
                <Text style={{ color: 'white' }}>Increase Count</Text>
            </TouchableOpacity>
        </View>
    )
}

export default index