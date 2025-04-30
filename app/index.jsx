import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'

const Home = () => {
    const [formValue, setFormValue] = useState('')
    const [todoList, setTodoList] = useState([])
    const addTodo = () => {
        if (formValue.trim() === '') return
        setTodoList([...todoList, { id: Date.now().toString(), text: formValue }])
        setFormValue('')
    }
    const deleteTodo = (id) => {
        setTodoList(todoList.filter((item) => item.id !== id))
    }
    return (
        <View className='flex-1 bg-slate-300 p-6'>
            <Text className='text-3xl text-gray-700 text-center font-semibold'>📄TODO APP</Text>
            <View className='flex-row items-center justify-center gap-2 mt-4'>
                <TextInput
                    className='border border-gray-500 rounded-lg px-4 bg-white flex-1'
                    placeholder='Enter your TODO.'
                    value={formValue}
                    onChangeText={setFormValue}
                />
                <TouchableOpacity
                    activeOpacity={0.8}
                    className='bg-green-600 px-6 py-3 rounded-lg justify-center'
                    onPress={addTodo}
                >
                    <Text className='text-green-100'>Add</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                className='mt-2'
                showsVerticalScrollIndicator={false}
            >
                {
                    todoList.map((item, index) => (
                        <View
                            key={index}
                            className='bg-white mb-2 rounded-lg pl-4'
                        >
                            <View className='flex-row items-center justify-between'>
                                <Text>{item.text}</Text>
                                <TouchableOpacity
                                    className='p-4'
                                    activeOpacity={0.8}
                                    onPress={() => deleteTodo(item.id)}
                                >
                                    <Text>❌</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default Home