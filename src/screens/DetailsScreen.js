import React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, Image } from 'react-native';
import COLORS from '../items/colors';
import { AntDesign } from '@expo/vector-icons';
import dogs from '../items/dogs';


import HomeScreen from './HomeScreen';



const DetailsScreen = ({ navigation, route }) => {

    const dog = route.params;

    return (
        // <View>
        //     <Text>Details</Text>
        //     <Button
        //         title="Go to HomeScreen"
        //         onPress={() => navigation.goBack('HomeScreen')}
        //     />
        // </View>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={styles.header}>
                <AntDesign name="arrowleft"
                    size={28} color="black"
                    onPress={() => navigation.goBack('HomeScreen')}
                />
                <AntDesign name="shoppingcart"
                    size={28} color="black"
                />
            </View>
            <View style={styles.imageContainer}>
                <Image source={dog.img} style={{ resizeMode: 'contain', flex: 1 }} />
            </View>
            <View style={styles.detailsContainer}>
                <View style={{
                    marginLeft: 20,
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}>
                    <View style={styles.line} />
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Best Choice</Text>
                </View>
                <View style={{ marginLeft: 20, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{dog.name}</Text>
                    <View style={styles.priceTag}><Text style={{ marginLeft: 15, color: COLORS.white, fontWeight: 'bold', fontSize: 16 }}>${dog.price}</Text></View>
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About</Text>
                    <Text style={{ color: 'grey', fontSize: 16, lineHeight: 22, marginTop: 10 }}>{dog.about}</Text>
                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.borderBtn}>
                                <Text style={styles.borderBtnText}> - </Text>
                            </View>
                            <Text style={{ fontSize: 20, marginHorizontal: 10, fontWeight: 'bold' }}>1</Text>
                            <View style={styles.borderBtn}>
                                <Text style={styles.borderBtnText}> + </Text>
                            </View>
                        </View>
                        <View style={{ width: 150, height: 50, backgroundColor: COLORS.green, justifyContent: 'center', alignItems: 'center', borderRadius: 30, }}>
                            <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 18 }}>Buy</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageContainer: {
        flex: 0.45,
        marginTop: 20,
        paddingTop: 80,
        justifyContent: 'center',
        alignContent: 'center',

    },
    detailsContainer: {
        flex: 0.55,
        backgroundColor: COLORS.light,
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 30
    },
    line: {
        width: 25,
        height: 2,
        backgroundColor: COLORS.dark,
        marginBottom: 5,
        marginRight: 3
    },
    priceTag: {
        backgroundColor: COLORS.green,
        width: 80,
        height: 40,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        justifyContent: 'center'
    },
    borderBtn: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    borderBtnText: {
        fontSize: 28,
        fontWeight: 'bold'
    }
})

export default DetailsScreen;
