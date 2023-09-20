import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, ScrollView } from 'react-native';
import { Images } from '../assets/Paths';
import { Colors } from '../assets/Colors';
import Category from '../components/Category';
import Card from '../components/Card';


const Dashboard = () => {
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView>
                <View style={styles.profile}>
                    <Image
                        source={Images.profile}
                        style={styles.img}
                    />
                    <Text style={styles.text} >
                        Lexa, United States
                    </Text>
                    <Text style={styles.heading} >
                        Know where you wanna go
                    </Text>
                </View>


                <View style={styles.category} >
                    <Text style={styles.heading}>
                        Category
                    </Text>
                    <View style={{ flexDirection: 'row', }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >
                            <Category source={Images.beach} name='Beach' />
                            <Category source={Images.farm} name='Farm' />
                            <Category source={Images.desert} name='Cliff' />
                            <Category source={Images.beach} name='Desert' />
                            <Category source={Images.farm} name='Iland' />
                            <Category source={Images.desert} name='Ground' />
                            <Category source={Images.farm} name='Hills' />
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.category} >
                    <Text style={styles.heading}>
                        Inspiration for your trip
                    </Text>
                    <View style={{ flexDirection: 'row', }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >
                            <Card source={Images.mountain2} title='Kawan Ijen' desc='Jawa Timur, Indonesia' price='$5.87' />
                            <Card source={Images.mountain1} title='Borobudur Park ' desc='Timur, Indonesia' price='$6.97' />
                            <Card source={Images.mountain3} title='Kawan Ijen' desc='Jawa Timur, Indonesia' price='$3.07' />
                            <Card source={Images.mountain2} title='Kawan Ijen' desc='Jawa Timur, Indonesia' price='$5.87' />
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.category} >
                    <Text style={styles.heading}>
                        Free destination
                    </Text>
                    <View style={{ flexDirection: 'row', }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >
                            <Card source={Images.mountain3} title='Kawan Ijen' desc='Jawa Timur, Indonesia' price='$5.87' />
                            <Card source={Images.mountain1} title='Borobudur Park ' desc='Timur, Indonesia' price='$6.97' />
                            <Card source={Images.mountain3} title='Kawan Ijen' desc='Jawa Timur, Indonesia' price='$3.07' />
                            <Card source={Images.mountain2} title='Kawan Ijen' desc='Jawa Timur, Indonesia' price='$5.87' />
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    profile: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    text: {
        color: Colors.black
    },
    heading: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    category: {
        padding: 10,
        // marginLeft: 10
    }
});

export default Dashboard;