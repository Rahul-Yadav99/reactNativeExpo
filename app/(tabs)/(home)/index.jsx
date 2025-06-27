import { CreateIconSet } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';

export default function HomeScreen() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const getProducts = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    if (loading)
        return <ActivityIndicator />

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>₹{item.price}</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={() => Alert.alert(item?.price.toString())}>
                <Text><CreateIconSet /></Text>
            </TouchableOpacity>
        </View>
    )
    return (
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    card: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 5,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 3, // For Android shadow
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
    },
    price: {
        marginTop: 5,
        color: '#2ecc71',
    },
});