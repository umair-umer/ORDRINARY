import React,{useState} from 'react'
import { Text, View, Dimensions,StyleSheet,SafeAreaView,TouchableOpacity,ImageBackground, TextInput } from 'react-native'
import { colors, sizes, fontSize } from '../../utilities';
import background from '../../Assets/background.png';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import { Arrowback } from '../../components'
function Login({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const isEmailValid = () => {
      // Simple email validation using a regular expression
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailPattern.test(email);
    };
  
    const isPasswordValid = () => {
      // Check if the password meets your validation criteria
      return password.length >= 6; // For example, require a minimum of 6 characters
    };
  
    const handleLogin = async () => {
      // Check if email and password are valid
    //   if (!isEmailValid()) {
    //     Alert.alert('Invalid Email', 'Please enter a valid email address.');
    //     return;
    //   }
  
    //   if (!isPasswordValid()) {
    //     Alert.alert('Invalid Password', 'Password must be at least 6 characters.');
    //     return;
    //   }
  
    //   try {
    //     // Make a POST request to your API endpoint for authentication
    //     const response = await axios.post('YOUR_LOGIN_API_ENDPOINT', {
    //       email,
    //       password,
    //     });
  
    //     // Assuming your API returns a token upon successful login
    //     const token = response.data.token;
  
    //     // Store the token securely, possibly in AsyncStorage or Redux, for future authenticated requests
  
    //     // Navigate to the user's profile or dashboard screen
    //     // navigation.navigate('profile');
    //   } catch (error) {
    //     // Handle login error, e.g., display an error message to the user
    //     console.error('Login failed:', error);
    //     Alert.alert('Login Failed', 'An error occurred while logging in.');
    //   }
    };

  return (
    <ImageBackground source={background} style={styles.bgImg} resizeMode='cover' >

<View style={styles.container}>
            <Arrowback />
            <View style={styles.logincontainer}>
                <Text style={styles.loginText}>Sign in</Text>
            </View>

             <View style={styles.incontainer}>
             <View style={styles.inpDiv}>
                <TextInput 
                placeholder='Email Address'
                placeholderTextColor={'#000'}
                style={styles.inp}
                >

                </TextInput>
              </View>
             
              <View style={styles.inpDiv}>
                <TextInput 
                placeholder='Password'
                placeholderTextColor={'#000'}
                style={styles.inp}
                >

                </TextInput>
              </View>

               <View style={styles.inpText}>
                   <Text  onPress={()=>navigation.navigate("forget")} style={styles.tt2}>Forget Password</Text>
               </View>
               


             </View>




             <View  style={styles.buttoncontainer}>
            <TouchableOpacity
            style={styles.button}
            onPress={()=>navigation.navigate("profile")}

          >
            <Text style={styles.logintext}>Sign in</Text>
          
          </TouchableOpacity>
            </View>




            </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({

    bgImg: {

        width: deviceWidth,
        height: deviceHeight,
        //  flex:1,
        display: "flex",
        // alignItems: "center"
        },
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
            justifyContent: "center",
            alignItems: "center",
        },

        inpDiv:{
            marginVertical:sizes.screenHeight*0.01,
         
        },

        inpText:{
            marginVertical:sizes.screenHeight*-0.001,
            alignItems:"center",
            fontSize:fontSize.medium,
            fontWeight:"700",
            fontFamily:"popin",
         
        },
        inp:{

            borderColor:"#7BCFF6",
            borderWidth:1,
            borderRadius:10,
            paddingHorizontal:sizes.screenWidth*0.06

        },
        tt2:{

            color:"#7BCFF6",
            fontSize:fontSize.medium,
            fontWeight:"700",
            fontFamily:"popin",
            left:sizes.screenWidth * 0.25
        },
        incontainer:{
            paddingHorizontal:sizes.screenWidth*0.04,
            marginVertical:sizes.screenHeight*0.06,
        },
        
    buttoncontainer:{
        marginVertical:sizes.screenHeight*0.01,
        justifyContent:"center",
        alignItems:"center"
    

    },
    button:{
        backgroundColor:"#7BCFF6",
        paddingHorizontal:sizes.screenWidth*0.3,
        paddingVertical:sizes.screenHeight*0.02,
        borderRadius:50,
    },
    logintext:{
        color:"#FFF",
        fontFamily:"poppins",
        fontWeight:"700",
        fontSize:fontSize.h5
    }



})

export default Login
