import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native';

import dogs from '../items/dogs';
import COLORS from '../items/colors';
const width = Dimensions.get("screen").width / 2 - 30
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {


    const categories = ['POPULAR', 'SECURITY', 'TOY', 'FRIENDLY'];

    const [categoryIndex, setCategoryIndex] = useState(0)

    const CategoryList = () => {
        return (
            <View style={styles.categoryContainer}>
                {categories.map((item, index) => (
                    <TouchableOpacity key={index}
                        acyiveOpacity={0.8}
                        onPress={() => setCategoryIndex(index)}>
                        <Text style={[styles.categoryText, categoryIndex == index && styles.categoryTextSelected]}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        )

    }

    const Card = ({ dog }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Details', dog)}>
                <View style={styles.card}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <View style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: dog.like ? 'rgba(245, 42, 42, 0.2)' : 'rgba(0,0,0,0.2)'
                        }}>
                            <MaterialIcons name="favorite" size={18} color={dog.like ? COLORS.red : COLORS.dark} />
                        </View>
                    </View>
                    <View style={{
                        height: 100
                    }}
                    >

                        <Image style={{
                            flex: 1,
                            resizeMode: 'contain'
                        }}
                            source={dog.img} />
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>{dog.name}</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 5
                        }}>
                        <Text style={{
                            fontSize: 19,
                            fontWeight: '300'
                        }}>${dog.price}</Text>
                        <View style={{
                            height: 25,
                            width: 25,
                            backgroundColor: COLORS.green,
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 22,
                                color: COLORS.white,
                                paddingBottom: 5
                            }}>
                                +
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingHorizontal: 20,
                backgroundColor: COLORS.white
            }}
        >
            <View style={styles.header}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Welcome to</Text>
                    <Text style={{ fontSize: 38, fontWeight: 'bold', color: COLORS.green }}>
                        My Shop
                    </Text>
                </View>
                <AntDesign name="shoppingcart" size={28} />
            </View>
            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                <View style={styles.searchContainer}>
                    <AntDesign name="search1" size={25} style={{ marginLeft: 20, }} />
                    <TextInput placeholder="Search" style={styles.input} />
                </View>
                <View style={styles.sortBtn}>
                    <FontAwesome name="sort-amount-desc" size={24} color={COLORS.white} />
                </View>
            </View>
            <CategoryList />
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ marginTop: 10, paddingBottom: 50 }}
                numColumns={2}
                data={dogs}
                renderItem={({ item }) => <Card dog={item} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchContainer: {
        height: 50,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.dark,
        flex: 1,
        height: 40,
    },
    sortBtn: {
        alignItems: 'center',
        marginLeft: 10,
        height: 50,
        width: 50,
        justifyContent: 'center',
        backgroundColor: COLORS.green,
        borderRadius: 10
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: "space-between"
    },
    categoryText: {
        fontSize: 16,
        color: 'grey',
        fontWeight: 'bold'
    },
    categoryTextSelected: {
        color: COLORS.green,
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: COLORS.green
    },
    card: {
        height: 225,
        backgroundColor: COLORS.light,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15
    }
})