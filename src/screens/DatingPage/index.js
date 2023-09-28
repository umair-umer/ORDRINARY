import React, { useState } from 'react'
import { FlatList, View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { sizes, fontSize } from '../../utilities'
import DP from '../../Assets/photo.png';
import DP1 from '../../Assets/stroy.jpg';
import DP2 from '../../Assets/DP2.jpg';
import DP3 from '../../Assets/DP3.jpg';
import DP4 from '../../Assets/DP4.jpg';
import ICON from '../../Assets/Plusicon.png';
import Img from '../../Assets/stoiesome.png'
import { AppHeader, Filter, TabBar } from '../../components';
import { useNavigation } from '@react-navigation/native';




const DATA = [
  {
    id: 1,
    image: DP,
    name: 'Emma',
    user: true,
  },
  {
    id: 2,
    image: DP1,
    name: 'Ava',
  },
  {
    id: 3,
    image: DP2,
    name: 'sopia',
  },
  {
    id: 4,
    image: DP3,
    name: 'Adam',
  },
  {
    id: 5,
    image: DP4,
    name: 'Brian',
  },
];
const postDATA = [
  {
    id: 1,
    image: DP3,
    name: 'Emma',
    backgroundimage: DP3,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    user: true,
    intrest: "Travel"
  },
  {
    id: 2,
    image: DP1,
    backgroundimage: DP1,
    name: 'Ava',
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    intrest: "Travel"

  },
  {
    id: 3,
    image: DP2,
    backgroundimage: DP2,
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    intrest: "Travel",
    name: 'sopia',
  },
  {
    id: 4,
    image: DP3,
    backgroundimage: DP3,
    name: 'Adam',
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    intrest: "food"
  },
  {
    id: 5,
    image: DP4,
    backgroundimage: DP4,
    name: 'Brian',
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    intrest: "fashion"
  },
];


const PostImage = ({ backgroundimage, image, name, des, intrest }) => {
  return (

    <ImageBackground source={backgroundimage} resizeMode='cover' style={styles.stories}>


      <TouchableOpacity style={styles.smbol}>
        <Text style={styles.txx}>{intrest}</Text>
      </TouchableOpacity>
      <View style={styles.dptxt}>
        <Text style={styles.dptt}>{des}</Text>
      </View>
      <View style={styles.showDp}>

        <View style={styles.profile1}>

          <Image
            source={image}
            style={{ width: "100%", height: "100%" }}

          />

        </View>
        <View>

          <Text style={styles.dptt1}>{name}</Text>
        </View>

      </View>

    </ImageBackground>





  )


}





const Item = ({ name, image, ICON }) => {
  const navigation = useNavigation();
  const [user, setuser] = useState(true)
  return (
    (
      <TouchableOpacity style={styles.StoryDiv} onPress={() => navigation.navigate("view")}>
        
        <View style={styles.profile}>
          <Image
            source={image}
            style={{ width: "100%", height: "100%" }}
            resizeMode='center'

          />
  

        </View>

        <Text style={styles.text}>{name}</Text>
        
      </TouchableOpacity>
    )
  )
}




function DatingPage({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={{ backgroundColor: "#fff", paddingBottom: sizes.screenHeight * 0.06 }} >
        <AppHeader openModal={openModal} />

        <View style={styles.Story}>

          <View style={styles.mainStor}>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={DATA}

              renderItem={({ item }) => <Item image={item.image} name={item.name} />}
              keyExtractor={item => item.id}
            />



          </View>
        </View>
        <View style={styles.bgbtn}>
          <View style={styles.btnDiv}>
            <TouchableOpacity
              style={styles.btn1}
              onPress={() => navigation.navigate("msgs")}
            >
              <Text style={styles.txx1}>Search partners</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2}
              onPress={() => navigation.navigate("swippage")}

            >
              <Text style={styles.txx2}>Make  friends </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.showDiv}>
          <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={postDATA}

            renderItem={({ item }) => <PostImage backgroundimage={item.backgroundimage} image={item.image} name={item.name} des={item.des} intrest={item.intrest}
            //  ICON={item.user ? ICON : ""}
            />}
            keyExtractor={item => item.id}
          />
        </View>



        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
          <TabBar />
        </View>
      </View>
      <Filter isModalVisible={isModalVisible} closeModal={closeModal} />

    </>






  )
}


const styles = StyleSheet.create({

  Story: {

    width: sizes.screenWidth * 1,
    height: sizes.screenHeight * 0.18,
    backgroundColor: "#fff"
  },
  StoryDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: sizes.screenWidth * 0.3,
    // height: sizes.screenHeight * 0.4,
    // marginHorizontal:sizes.screenWidth * -0.028,
    backgroundColor: "#fff"
  },
  mainStor: {
    flexDirection: "row"
  },
  profile: {

    width: sizes.screenWidth * 0.22,
    height: sizes.screenHeight * 0.10,
    backgroundColor:"#fff",
    marginVertical: sizes.screenHeight * 0.01,
    marginHorizontal: sizes.screenWidth * 0.03,
    borderColor: "#88CFF1",
    borderWidth: 2,
    borderRadius: 90,
    overflow: 'hidden'

  },
  text: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: fontSize.medium,
    fontFamily: "popin",
    fontWeight: "900",
    right: sizes.screenWidth * 0.02,
    color: "#000"
  },

  img: {

    width: sizes.screenWidth * 0.18,
    height: sizes.screenHeight * 0.09,
    alignItems: "center",
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: sizes.screenWidth * 0.005,
    marginVertical: sizes.screenWidth * 0.005,


  },
  icon: {

    flexDirection: "row",

  },
  showDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical:sizes.screenHeight*0.03,
    marginTop: sizes.screenHeight * 0.05,
    // marginBottom:sizes.screenHeight*0.16,
    height: sizes.screenHeight * 0.50


  },
  stories: {

    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.5,
    // backgroundColor: "white",
    marginVertical: sizes.screenHeight * 0.02,

    borderRadius: 10,


    paddingHorizontal: sizes.screenWidth * 0.03,
    paddingVertical: sizes.screenHeight * 0.02
  },
  smbol: {

    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.05,
    backgroundColor: "#CBCBCB",

    borderRadius: sizes.screenWidth * 0.125,
    opacity: 0.6
  },
  txx: {
    textAlign: "center",
    color: "#fff",
    fontSize: fontSize.medium,
    fontWeight: "800",
    marginVertical: sizes.screenHeight * 0.009,
    fontFamily: "popin",
    borderColor: "#fff"
  },
  storImg: {
    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.5,
    borderRadius: 20,
    //  opacity:0.2


  },
  dptxt: {
    justifyContent: 'flex-end',
    // width: sizes.screenWidth * 0.65,
    height: sizes.screenHeight * 0.25,
    // backgroundColor:"#000",
    // marginHorizontal: sizes.screenHeight * 0.06,
    // marginVertical: sizes.screenWidth * -0.45,
  },
  dptt: {

    color: "#fff",
    fontSize: fontSize.h6,
    fontWeight: "900",
    marginVertical: sizes.screenHeight * -0.06
  },
  showDp: {

    width: sizes.screenWidth * 0.6,
    height: sizes.screenHeight * 0.10,

    // marginHorizontal: sizes.screenHeight * 0.05,
    // marginVertical: sizes.screenWidth * 0.35,
    flexDirection: "row",
    marginTop: sizes.screenHeight * 0.08,
    alignItems: 'center'


  },
  profile1: {

    width: sizes.screenWidth * 0.13,
    height: sizes.screenHeight * 0.06,
    backgroundColor: "#fff",
    // marginVertical: sizes.screenHeight * 0.015,
    // marginHorizontal: sizes.screenWidth * 0.02,
    borderColor: "#88CFF1",
    borderWidth: 2,
    borderRadius: 50,
    overflow: 'hidden',
  },
  img1: {
    width: sizes.screenWidth * 0.12,
    height: sizes.screenHeight * 0.07,
    alignItems: "center",
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: sizes.screenWidth * -0.005,
    marginVertical: sizes.screenHeight * -0.002


  },
  dptt1: {

    color: "#fff",
    fontSize: fontSize.h6,
    fontWeight: "900",
    marginVertical: sizes.screenHeight * 0.03,
    marginHorizontal: sizes.screenWidth * 0.03,
    textTransform: "capitalize"
  },
  btnDiv: {

    width: sizes.screenWidth * 0.9,
    height: sizes.screenHeight * 0.06,
    backgroundColor: "#88CFF1",
    borderRadius: 10,
    marginHorizontal: sizes.screenWidth * 0.05,
    flexDirection: "row"

  },
  btn1: {

    width: sizes.screenWidth * 0.45,
    height: sizes.screenHeight * 0.05,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: sizes.screenHeight * 0.005,
    marginHorizontal: sizes.screenWidth * 0.007,
  },
  txx1: {

    textAlign: "center",
    color: "#88CFF1",
    fontSize: fontSize.medium,
    fontWeight: "700",
    marginVertical: sizes.screenHeight * 0.009,
    marginHorizontal: sizes.screenWidth * 0.06,
    fontFamily: "popin",

  },
  btn2: {

    width: sizes.screenWidth * 0.4,
    height: sizes.screenHeight * 0.05,
    backgroundColor: "#88CFF1",
    borderRadius: 10,
    marginVertical: sizes.screenHeight * 0.005,
    marginHorizontal: sizes.screenWidth * 0.007,
  },
  txx2: {

    textAlign: "center",
    color: "#fff",
    fontSize: fontSize.medium,
    fontWeight: "700",
    marginVertical: sizes.screenHeight * 0.009,
    marginHorizontal: sizes.screenWidth * 0.06,
    fontFamily: "popin",

  },
  bgbtn: {

    backgroundColor: "#fff"
  }

})

export default DatingPage
