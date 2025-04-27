import { View, Text, Button, Modal, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native'

const index = () => {
    const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    function findVlue(v) {
        console.log(v)
    }
    return (
        // <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        //     {
        //         count.map(function (item, index) {
        //             return (
        //                 <View style={{ height: 80, width: 80, backgroundColor: (index % 2 === 0) ? "dodgerblue" : "deeppink", borderRadius: '100%', alignItems: 'center', justifyContent: 'center', marginHorizontal: 2 }}>
        //                     <Text style={{ color: 'white' }}>{item}</Text>
        //                 </View>
        //             )
        //         })
        //     }
        // </ScrollView>
        <View>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ alignItems: 'center' }}
                data={count}
                numColumns={4}
                renderItem={function ({ item, index }) {
                    return (
                        <TouchableOpacity activeOpacity={0.8} onPress={() => findVlue(index)} style={{ height: 80, width: 80, backgroundColor: (index % 2 === 0) ? "dodgerblue" : "deeppink", borderRadius: '100%', alignItems: 'center', justifyContent: 'center', margin: 2 }}>
                            <Text style={{ color: 'white' }}>{index}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default index