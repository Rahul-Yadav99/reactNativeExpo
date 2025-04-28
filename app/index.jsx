import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ReactNativeModal from 'react-native-modal'

const index = () => {
    const [visible, setVisible] = useState(false)
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa' }}>
                <TouchableOpacity className='bg-fuchsia-500 px-6 py-4 rounded-md' activeOpacity={0.8} onPress={() => setVisible(true)}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 500 }}>Open Model</Text>
                </TouchableOpacity>
            </View>
            <ReactNativeModal
                isVisible={visible}
                onBackdropPress={() => setVisible(false)}
                onBackButtonPress={() => setVisible(false)}
                style={{ justifyContent: 'flex-end', margin: 0 }}
            >
                <View className='bg-gradient-to-l from-fuchsia-600 to-blue-600 items-center justify-center' style={{ backgroundColor: 'white', height: 200, borderTopEndRadius: 20, borderTopStartRadius: 20 }}>
                    <Text className="text-blue-500 text-2xl font-semibold">Rahul yadav</Text>
                    <ActivityIndicator size={'large'} color={'green'} />
                </View>
            </ReactNativeModal>
        </View>
    )
}

export default index