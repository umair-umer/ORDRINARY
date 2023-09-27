import React from 'react'
import { Text, View, Dimensions,StyleSheet,SafeAreaView,TouchableOpacity,ImageBackground, TextInput } from 'react-native'
import { colors, sizes, fontSize } from '../../utilities';
import PhoneInput from "react-native-phone-number-input";import { Colors } from "react-native/Libraries/NewAppScreen";
import background from '../../Assets/background.png';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { Arrowback } from '../../components';

export default function NameScreen({navigation}) {
  
  const [name, setName] = useState('');
  const handleNext = () => {
    // Navigate to the next screen and pass the name as a parameter
    navigation.navigate('genderscreen', { name });
  };
  return (
    <ImageBackground source={background} style={styles.bgImg} resizeMode='cover' >
    
    <View style={styles.container}>
    <View style={styles.header}  >
      <Arrowback/>
      </View>
      <View style={styles.logincontainer}>
                {/* <Text style={styles.loginText}>Login</Text> */}
                <Text style={styles.enternumberText}>What’s your name?</Text>
         
         
         </View>
        
        <View style={styles.inpCon}>

       <TextInput
        placeholder='Enter Your name'
        placeholderTextColor={"#000"}
         style={styles.inp}
       />

        </View>
        <View style={styles.nextBtn}>
        <TouchableOpacity onPress={handleNext}>

        <AntDesign name="arrowright" size={30 } color={'white'}/>
        </TouchableOpacity>
          </View>


        <View style={styles.num}>
    <Text style={styles.number}>1/2</Text>
</View>
          <View style={styles.lightbslide}>
            <View style={styles.darkblue}>

            </View>
          </View>
    </View>

     


</ImageBackground>
)
}


const styles = StyleSheet.create({
container: {
flex: 1,
paddingHorizontal:sizes.screenWidth*0.03
// justifyContent: 'center',
// alignItems: 'center'
},

bgImg: {

width: deviceWidth,
height: deviceHeight,
//  flex:1,
display: "flex",
// alignItems: "center"
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
  fontSize: fontSize.h4,
  fontWeight:"700"

},
inputnumber: {
  justifyContent: "center",
  alignItems: "center",
},
inp:{

    borderWidth:1,
    borderColor:"#7BCFF6",
    paddingHorizontal:sizes.screenWidth * 0.03,
    borderRadius:10,
    color:"#000"
},
inpCon:{
        marginHorizontal:sizes.screenWidth *0.02,
       width:sizes.screenWidth * 0.9,
      justifyContent:"center"
},
nextBtn:{
   top:sizes.screenHeight*0.55,
   left: sizes.screenWidth *0.74,
    width:sizes.screenWidth * 0.20,
    height: sizes.screenHeight * 0.09,
    backgroundColor: "#7BCFF6",
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
  
    
   
    

},
lightbslide:{
  width:sizes.screenWidth*0.9,
  height:sizes.screenHeight*0.01,
  backgroundColor:"#E4F6FF",
  top:sizes.screenHeight*0.55,
},
darkblue:{
  width:sizes.screenWidth*0.50,
  height:sizes.screenHeight*0.01,
  backgroundColor:"#88CFF1",
  // top:sizes.screenHeight*0.50,
},
num:{
  top:sizes.screenHeight*0.54
},
number:{
  fontFamily: "poppins",
  color: "#7BCFF6",
  fontSize: fontSize.h5,
  fontWeight: "700"
}



})

    



