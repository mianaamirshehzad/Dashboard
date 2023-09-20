import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Images } from '../assets/Paths';


const Card = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <ImageBackground
                source={props.source}
                style={styles.img}
                imageStyle={{ borderRadius: 20 }} >
                <View style={styles.priceContainer} >
                    <Text style = {{color: 'white'}} >
                       {props.price}
                    </Text>
                </View>
            </ImageBackground>
            <View style={styles.textContainer} >
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={styles.desc}>
                    {props.desc}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 1,
        padding: 8,
        margin: 5
    },
    img: {
        width: 200,
        height: 150,

    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,
        padding: 5
    },
    textContainer: {
        // marginLeft: 14,
        marginBottom: 5
    },
    priceContainer: {
        backgroundColor: 'grey',
        borderRadius: 20,
        width: '25%',
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    }

});
export default Card;