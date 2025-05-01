import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Product = () => {
    return (
        <View className='flex-1 items-center justify-center bg-blue-500'>
            <Text className='text-xl font-semibold text-white'>Product</Text>
            <Link href={'/profile'}>Go to Profile Screen</Link>
        </View>
    )
}

export default Product