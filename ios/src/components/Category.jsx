import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { Images } from '../assets/Paths';


const Category = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={props.source}
                style={styles.img} />
            <Text style={styles.text}>
                {props.name}
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 10
    },
    text: {
        color: 'black'
    }
});
export default Category;