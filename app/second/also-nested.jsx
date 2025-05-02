import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const AlsoN = () => {
  return (
    <View>
      <Text>also Screen</Text>
      <Link href={'/second/nested'}>Go to index</Link>
    </View>
  )
}

export default AlsoN