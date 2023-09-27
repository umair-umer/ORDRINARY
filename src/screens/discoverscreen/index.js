import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { sizes, fontSize } from '../../utilities'
import { AppHeader, TabBar } from '../../components'
import dp1 from "../../Assets/dp1.png"
import dp2 from "../../Assets/map.png"
import dp3 from "../../Assets/mapBg.png"
import Entypo from 'react-native-vector-icons/Entypo';
// import MapView from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
const DiscoverScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView Vertical={true} showsVerticalScrollIndicator={false}>
                <AppHeader />
                <View style={{ paddingHorizontal: sizes.screenWidth * 0.02 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <ImageBackground source={dp1} style={styles.scrollback}>
                            <Text style={{ color: "white", alignSelf: 'center', fontWeight: '700', marginBottom: sizes.screenHeight * 0.01 }}>Jessica,20</Text>
                            <ImageBackground blurRadius={9} source={dp1} style={{ flexDirection: 'row', backgroundColor: "#C4C4C4", justifyContent: 'space-between', paddingHorizontal: sizes.screenWidth * 0.02, }}>
                                <View ><Entypo name="cross" size={40} color="white" /></View>

                                <View><Entypo name={"heart"} size={40} color="white" /></View>
                            </ImageBackground>
                        </ImageBackground>
                        <ImageBackground source={dp1}
                            style={styles.scrollback}
                        >
                            <Text style={{ color: "white", alignSelf: 'center', fontWeight: '700', marginBottom: sizes.screenHeight * 0.01 }}>Jessica,20</Text>
                            <ImageBackground blurRadius={9} source={dp1}
                                style={{ flexDirection: 'row', backgroundColor: "#C4C4C4", justifyContent: 'space-between', paddingHorizontal: sizes.screenWidth * 0.02, }}
                            >
                                <View ><Entypo name="cross" size={40} color="white" /></View>

                                <View><Entypo name={"heart"} size={40} color="white" /></View>
                            </ImageBackground>
                        </ImageBackground>
                        <ImageBackground source={dp1} style={styles.scrollback}>
                            <Text style={{ color: "white", alignSelf: 'center', fontWeight: '700', marginBottom: sizes.screenHeight * 0.01 }}>Jessica,20</Text>
                            <ImageBackground blurRadius={9} source={dp1} style={{ flexDirection: 'row', backgroundColor: "#C4C4C4", justifyContent: 'space-between', paddingHorizontal: sizes.screenWidth * 0.02, }}>
                                <View ><Entypo name="cross" size={40} color="white" /></View>

                                <View><Entypo name={"heart"} size={40} color="white" /></View>
                            </ImageBackground>
                        </ImageBackground>

                        <ImageBackground source={dp1} style={styles.scrollback}>
                            <Text style={{ color: "white", alignSelf: 'center', fontWeight: '700', marginBottom: sizes.screenHeight * 0.01 }}>Jessica,20</Text>
                            <ImageBackground blurRadius={9} source={dp1} style={{ flexDirection: 'row', backgroundColor: "#C4C4C4", justifyContent: 'space-between', paddingHorizontal: sizes.screenWidth * 0.02, }}>
                                <View ><Entypo name="cross" size={40} color="white" /></View>

                                <View><Entypo name={"heart"} size={40} color="white" /></View>
                            </ImageBackground>
                        </ImageBackground>
                    </ScrollView>
                </View>
                <View style={{ paddingLeft: sizes.screenWidth * 0.04, marginVertical: sizes.screenHeight * 0.03, }}>
                    <Text style={styles.intrestText}>Interest</Text>

                </View>

                <View style={styles.btnMain}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.txt}>High School/GED </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.txt}>Trade School</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.txt}>Took a  Different Path </Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>

                <View style={styles.btnMain2}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.txt}> Associate  </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn2}>
                            <Text style={styles.txt1}>Bachelors</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.txt}>In School </Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>

                <View style={{ paddingLeft: sizes.screenWidth * 0.04, marginVertical: sizes.screenHeight * 0.01, }}>
                    <Text style={styles.intrestText}>Around me</Text>
                    <Text style={styles.txt2}>
                        Academically, there are people around you with “Bachelor's” degrees
                    </Text>
                </View>


                <View
                style={styles.mapCont}
                >

                    <MapView
                         style={styles.map}
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                    </MapView>





                </View>
            </ScrollView>
        </View>
    )
}

export default DiscoverScreen
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
        height: sizes.screenHeight * 2
    },
    scrollback: {
        width: sizes.screenWidth * 0.4,
        height: sizes.screenHeight * 0.3,
        justifyContent: 'flex-end',
        marginHorizontal: sizes.screenWidth * 0.01,
    },
    intrestText: {
        color: '#000',
        fontWeight: '800',
        fontFamily: "popin",
        fontSize: fontSize.h4
    },

    btnMain: {
        width: sizes.screenWidth * 1,
        flexDirection: "row",

    },
    btn: {

        width: sizes.screenWidth * 0.39,
        height: sizes.screenHeight * 0.05,
        borderColor: "#88CFF1",
        borderWidth: 1,
        marginHorizontal: sizes.screenWidth * 0.01,
        borderRadius: 20,
        alignItems: "center"

    },
    txt: {

        marginVertical: sizes.screenHeight * 0.01,
        color: "#000",
        fontSize: fontSize.medium,
        fontWeight: "400"
    },
    btnMain2: {
        width: sizes.screenWidth * 1,
        flexDirection: "row",
        marginVertical: sizes.screenHeight * 0.02,
        marginHorizontal: sizes.screenWidth * 0.02

    },

    btn2: {

        width: sizes.screenWidth * 0.39,
        height: sizes.screenHeight * 0.05,
        backgroundColor: "#88CFF1",
        borderWidth: 1,
        borderColor: "#88CFF1",
        marginHorizontal: sizes.screenWidth * 0.01,
        borderRadius: 20,
        alignItems: "center"

    },

    txt1: {

        marginVertical: sizes.screenHeight * 0.01,
        color: "#fff",
        fontSize: fontSize.medium,
        fontWeight: "500",
    },


    txt2: {
        width: sizes.screenWidth * 0.9,
        marginVertical: sizes.screenHeight * 0.01,
        color: "#000",
        fontSize: fontSize.medium,
        fontWeight: "500",
        fontFamily: "popin"
    },

    map: {
        width: "100%",
        backgroundColor:"red",
        height: "100%",
        overflow: 'hidden',
        // height: sizes.screenHeight * 0.4,
        // backgroundColor: "#fff"
        borderRadius:10,
    },
    mapCont:{
        justifyContent:'center',
        alignItems:'center',
        width: sizes.screenWidth,
        // backgroundColor:"red",
        height: sizes.screenHeight *0.6,
    
    },

    // img: {

    //     width: sizes.screenWidth ,
    //     height: sizes.screenHeight ,
    //     overflow:'hidden'
    // },

    person: {

        width: sizes.screenWidth * 0.5,
        height: sizes.screenHeight * 0.2,
        //   backgroundColor:"#fff",
        marginHorizontal: sizes.screenWidth * 0.4,
        marginVertical: sizes.screenHeight * 0.1
    },
    pimg: {

        marginHorizontal: sizes.screenWidth * 0.09
    }


})