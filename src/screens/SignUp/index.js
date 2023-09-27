import React, { useState } from 'react'
import { Text, View, Dimensions, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
import { colors, sizes, fontSize } from '../../utilities';
import background from '../../Assets/background.png';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import { Arrowback, Loader } from '../../components'
import axios from 'axios';
function SignUp({ navigation }) {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState();
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSignup = () => {
  
    openModal(); 
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('All fields are required');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // setError('');

      
    
    }
    setTimeout(() => {
      closeModal(); 
      navigation.navigate('login'); 
    }, 3000);
  }





  return (
<>   
<Loader isModalVisible={isModalVisible} closeModal={closeModal}/>
    <ImageBackground source={background} style={styles.bgImg} resizeMode='cover' >
      <View style={styles.container}>
        <Arrowback />
        <View style={styles.logincontainer}>
          <Text style={styles.loginText}>Sign up</Text>


        </View>

        <View style={styles.incontainer}>
          <View style={styles.inpDiv}>
            <TextInput
              onChangeText={(text) => setFirstName(text)}
              placeholder='First Name'
              placeholderTextColor={'#000'}
              style={styles.inp}
              value={firstName}
            >

            </TextInput>
            <Text style={{ color: "red" }}>{firstName == null ? error : ""}</Text>
          </View>

          <View style={styles.inpDiv}>
            <TextInput
              onChangeText={(text) => setLastName(text)}
              placeholder='Last Name'
              placeholderTextColor={'#000'}
              style={styles.inp}
              value={lastName}
            >


            </TextInput>
            <Text style={{ color: "red" }}>{lastName == null ? error : ""}</Text>
          </View>


          <View style={styles.inpDiv}>
            <TextInput
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
              style={styles.inp}
            >

            </TextInput>
            <Text style={{ color: "red" }}>{email == null ? error : ""}</Text>
          </View>


          <View style={styles.inpDiv}>
            <TextInput
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              value={password}
              style={styles.inp}
            >

            </TextInput>
            <Text style={{ color: "red" }}>{password == null ? error : ""}</Text>
          </View>


          <View style={styles.inpDiv}>
            <TextInput
              placeholder="Confirm Password"
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}

              placeholderTextColor={'#000'}
              style={styles.inp}
            >

            </TextInput>
            <Text style={{ color: "red" }}>{confirmPassword == null ? error : ""}</Text>
          </View>
          <View style={styles.inpText}>
            <Text style={styles.info}>If you ar already sign up <Text onPress={() => navigation.navigate("login")} style={styles.tt2}>? Sigin</Text></Text>
          </View>



        </View>




        <View style={styles.buttoncontainer}>
          <TouchableOpacity
            style={styles.button}

            onPress={handleSignup}

          >

            <Text style={styles.logintext}>Sign Up</Text>

          </TouchableOpacity>
        </View>




      </View>
    </ImageBackground>
    </> 
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

  inpDiv: {
    marginVertical: sizes.screenHeight * 0.01,

  },

  inpText: {
    marginVertical: sizes.screenHeight * -0.001,
    alignItems: "center",
    fontSize: fontSize.medium,
    fontWeight: "700",
    fontFamily: "popin",

  },
  inp: {

    borderColor: "#7BCFF6",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: sizes.screenWidth * 0.06

  },
  tt2: {

    color: "#7BCFF6",
    fontSize: fontSize.medium,
    fontWeight: "700",
    fontFamily: "popin",
  },
  incontainer: {
    paddingHorizontal: sizes.screenWidth * 0.04,
    marginVertical: sizes.screenHeight * 0.06,
  },

  buttoncontainer: {
    marginVertical: sizes.screenHeight * 0.01,
    justifyContent: "center",
    alignItems: "center"


  },
  button: {
    backgroundColor: "#7BCFF6",
    paddingHorizontal: sizes.screenWidth * 0.3,
    paddingVertical: sizes.screenHeight * 0.02,
    borderRadius: 50,
  },
  logintext: {
    color: "#FFF",
    fontFamily: "poppins",
    fontWeight: "700",
    fontSize: fontSize.h5
  },
  info: {

    color: "#000"
  }



})

export default SignUp