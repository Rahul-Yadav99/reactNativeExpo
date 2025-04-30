import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
const Home = () => {
    const router = useRouter()
    const redirect = () => {
        router.push('/profile')
    }
    return (
        <View className='flex-1 bg-yellow-100 items-center justify-center'>
            <TouchableOpacity activeOpacity={0.8} onPress={redirect} className='bg-fuchsia-500 px-5 py-2 rounded-lg'>
                <Text className='text-white font-semibold text-2xl'>Redirect</Text>
            </TouchableOpacity>
            <Link href={'/about'} asChild>
                <TouchableOpacity activeOpacity={0.8} className='bg-pink-500 p-3 mt-4 rounded-lg'>
                    <Text className='text-white font-semibold'>Go to About page.</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

export default Home