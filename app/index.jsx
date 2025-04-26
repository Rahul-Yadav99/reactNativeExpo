import { View, Text, Button, Modal } from 'react-native'
import React, { useState } from 'react'

const index = () => {

    const [visible, setVisible] = useState(false)

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
                        fontWeight: 500
                    }
                }
            >
                Welcome to the home Page.
            </Text>
            <Button title='Open' onPress={() => setVisible(true)} />
            <Modal
                visible={visible}
                onRequestClose={() => setVisible(false)}
                animationType='slide'
            >
                <Text>DATA</Text>
                <Button title="Close" onPress={() => setVisible(false)} />
            </Modal>
        </View>
    )
}

export default index