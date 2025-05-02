import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SecondScreen = () => {
  return (
    <View className='p-4 flex-1 items-center justify-center'>
      <Text>Index Screen</Text>
      <Link href={'/second/also-nested'} push asChild>
        <Button title='Push to /second/nested' />
      </Link>
    </View>
  )
}

export default SecondScreen