import React, { useState, useRef } from "react";
import {
    Text, View, Dimensions, StyleSheet, SafeAreaView,

    StatusBar,
    TouchableOpacity,
} from 'react-native'
import { Arrowback } from '../../components'
import { colors, sizes, fontSize } from '../../utilities';
import PhoneInput from "react-native-phone-number-input";
import { Colors } from "react-native/Libraries/NewAppScreen";
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const LoginWithNumber = ({navigation}) => {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef < PhoneInput > (null);

    return (
        <View style={styles.container}>
            <Arrowback />
            <View style={styles.logincontainer}>
                <Text style={styles.loginText}>Login</Text>
                <Text style={styles.enternumberText}>Enter your phone number</Text>
            </View>
            <View style={styles.inputnumber}>

             
                <PhoneInput
                    // ref={phoneInput}    
                    textContainerStyle={{ backgroundColor: 'white', borderRadius: 20, color: "#ffffff", padding: 0 }}
                    containerStyle={{ borderColor: "#7BCFF6", borderWidth: 2, borderRadius: 20 }}
                    defaultValue={value}
                    defaultCode="DM"
                    layout="first"
                    keyboardType="phone-pad"
                    onChangeText={(text) => {
                        setValue(text);
                    }}
                    onChangeFormattedText={(text) => {
                        setFormattedValue(text);
                    }}
                    // withDarkTheme
                    // withShadow
                    autoFocus
                />




            </View>
            <View  style={styles.buttoncontainer}>
            <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const checkValid = phoneInput.current?.isValidNumber(value);
              setShowMessage(true);
              setValid(checkValid ? checkValid : false);
            }}
          >
            
             <TouchableOpacity
              onPress={()=>navigation.navigate("Verify")}
             
             ><Text style={styles.logintext}>Login</Text></TouchableOpacity> 
          
          </TouchableOpacity>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: sizes.screenWidth * 0.02,
        paddingVertical: sizes.screenHeight * 0.02

    },
    logincontainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    loginText: {
        fontFamily: "poppins",
        color: "#7BCFF6",
        fontSize: fontSize.h1,
        fontWeight: '700'
    },
    enternumberText: {
        marginVertical: sizes.screenHeight * 0.02,
        fontFamily: "poppins",
        color: "#7BCFF6",
        fontSize: fontSize.h5,

    },
    inputnumber: {
        marginVertical:sizes.screenHeight*0.02,
        height:sizes.screenHeight*0.03,
        justifyContent: "center",
        alignItems: "center",
    },
   
   
    buttoncontainer:{
        marginVertical:sizes.screenHeight*0.05,
        justifyContent:"center",
        alignItems:"center"
    

    },
    button:{
        backgroundColor:"#7BCFF6",
       width:sizes.screenWidth*0.,
       height:sizes.screenHeight*0.05,
        borderRadius:50,
    },
    logintext:{
        color:"#FFF",
        fontFamily:"poppins",
        fontWeight:"700",
        fontSize:fontSize.h5
    }


})

export default LoginWithNumber
