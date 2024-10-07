//import { StatusBar } from 'expo-status-bar';
import styles from './styles/home.js';
import React, {useRef, useState} from 'react';
//import Icon from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
//import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
//import FIcon from 'react-native-vector-icons/Feather';
import {Home, VideoPlay, SearchZoomIn, Teacher, VideoCircle} from 'iconsax-react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  TextInput,
  Image,
  View,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView 
} from 'react-native';
//import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
//import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import alligator from './assets/images/slide1.svg';
//import HomeScreen from './screens/HomeScreen';
//import SettingsScreen from './screens/SettingsScreen';
//import Share from 'react-native-share';

export default function App() {
  let imagePATH = './assets/images/';
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');

  // const [fontsLoaded] = useFonts({
  //   Octicons: require('react-native-vector-icons/Fonts/Ionicons.ttf'), // Ensure correct path
  // });
  const [fontsLoaded] = useFonts({
    FontAwesome: require('react-native-vector-icons/Fonts/FontAwesome.ttf'), // Ensure correct path
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // const changeDrawerPosition = () => {
  //   if (drawerPosition === 'left') {
  //     setDrawerPosition('right');
  //   } else {
  //     setDrawerPosition('left');
  //   }
  // };

  const onShare = async () => {
    try {
      // await Share.share({
      //   message: 'Check out this awesome content!',
      //   url: 'https://example.com', // Optional: include a URL if sharing a link
      // });
      // Share.open(options)
      // .then((res) => {
      //   console.log(res);
      // })
      // .catch((err) => {
      //   err && console.log(err);
      // });
    } catch (error) {
      console.log('Error sharing:', error.message);
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  const InstaCard = ({ title, image, description }) => {
    return (
      <View style={styles.instaCard}>
        {/* <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={styles.instaCardImage} alt='loading' onError={(error) => console.log('Error loading image:', error.nativeEvent.error)} /> */}
        <Image source={require('./assets/images/slide1.png')} style={styles.instaCardImage} alt='loading' onError={(error) => console.log('Error loading image:', error.nativeEvent.error)} />
        <View style={[styles.divRowLR, {height:'auto', marginLeft:10, marginRight: 10}]}>
          <View style={{flexDirection: 'row', gap:10}}>
          <Text style={{fontSize:10, color: '#7A869A'}}>{title}</Text>
          </View>
          <View style={{flexDirection: 'row', gap:20}}>
          <TouchableOpacity onPress={onShare}>
          <Icon name="share-alt" size={20} color="#000" style={{ fontWeight: 100 }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={onShare}>
          <Icon5 name="ellipsis-v" size={20} color="#000" style={{ fontWeight: 100 }} />
          </TouchableOpacity>
          </View>

        </View>
          <View style={{flexDirection: 'row', marginLeft: 10}}>
            <Text style={{fontWeight:700}}>{description}</Text>
          </View>

          <View style={[styles.divRowLR, {height:'auto', marginLeft:10, marginRight: 10}]}>
          {/* <View> */}
          <View style={{flexDirection: 'row', gap:5, alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={onShare}>
          <Icon name="heart-o" size={20} color="#EB5757" style={{ fontWeight: 100 }} />
          </TouchableOpacity>
          <Text>500</Text>
          </View>
          <View style={{flexDirection: 'row', gap:10, alignItems: 'flex-end'}}>
          <Image source={require('./assets/images/logo1.png')} alt='loading' onError={(error) => console.log('Error loading image:', error.nativeEvent.error)} />
          </View>
          {/* </View> */}
          </View>
        
      </View>
    );
  };

  const InstaList = ({ title, image, description }) => {
    return (
      <View style={styles.instaList}>
        <Image source={require('./assets/images/slide1.png')} style={styles.instaListImage} alt='loading' onError={(error) => alert(error.nativeEvent.error)} />
        <View style={{height:'auto', marginLeft:5, marginRight: 5}}>
          <View style={{}}>
          <Text style={{fontSize:10, color: '#7A869A'}}>{title}</Text>
          </View>

          <View style={{width:200, flex:1, flexGrow: 1}}>
          <Text style={{fontSize:10, fontWeight:700}}>{description}</Text>
          </View>
        </View>

       
          {/* <View style={{flexDirection: 'row', marginLeft: 10}}>
            <Text style={{fontWeight:700}}>{description}</Text>
          </View> */}

          {/* <View style={[styles.divRowLR, {height:'auto', marginLeft:10, marginRight: 10}]}>
          <View style={{flexDirection: 'row', gap:5, alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={onShare}>
          <Icon name="heart-o" size={20} color="#EB5757" style={{ fontWeight: 100 }} />
          </TouchableOpacity>
          <Text>500</Text>
          </View>
          <View style={{flexDirection: 'row', gap:10, alignItems: 'flex-end'}}>
          <Image source={require('./assets/images/logo1.png')} alt='loading' onError={(error) => console.log('Error loading image:', error.nativeEvent.error)} />
          </View>
          </View> */}
        
      </View>
    );
  };


  return (
    <DrawerLayoutAndroid ref={drawer} drawerWidth={300} drawerPosition={drawerPosition} renderNavigationView={navigationView}>
      
    {/* <ScrollView  showsVerticalScrollIndicator={true}> */}
    <View style={styles.divMain}>
    <View style={styles.divMenuRow}>
      <View style={styles.leftItem}>
    <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
      <Icon name="bars" size={20} color="#000" />
    </TouchableOpacity>
    </View>

    <View style={styles.rightItem}>
    <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
      <Icon name="search" size={20} color="#000" />
    </TouchableOpacity>
    </View>
    </View>

    <LinearGradient
      colors={['#334D99', '#355FD3']} // Gradient colors
      start={{ x: 0, y: 0 }} // Start position
      end={{ x: 0, y: 1 }} // End position (180 degrees)
      style={[styles.divGradient, styles.curvedBottom]}
    >
    <Text style={styles.gradientBoldText}>Hi, Arul!</Text>
    <Text style={styles.gradientNormalText}>Welcome to fastest growing community of doctors today</Text>
    <View>
      <TextInput
        style={styles.InputTextSearch}
        placeholder="Search what's in your mind..."
        value={""}
        onChangeText={""} 
      />
    </View>
    </LinearGradient>

    <View>
      <Text style={styles.sectionHead}>Popular this week</Text>
    </View>

    <InstaCard
        title="Medwiki"
        image="./assets/images/slide1.png"
        description="Current Trends in the Treatment of in the Drug-Resistant Pneumonia"
      />

<View>
      <Text style={styles.sectionHead}>Most Viewed by Doctors</Text>
    </View>

    <InstaList
        title="Medwiki"
        image="./assets/images/slide1.png"
        description="Current Trends in the Treatment of in the Drug-Resistant Pneumonia"
      />
</View>
    {/* </ScrollView> */}

    


    <View style={styles.footer}>
    <View style={{flex:1, alignItems:'center'}}><Home color="#000" size={20} variant='Outline' /><Text style={{fontSize: 10}}>Home</Text></View>
    <View style={{flex:1, alignItems:'center'}}><Teacher color="#000" size={20} variant='Outline' /><Text style={{fontSize: 10}}>Live CME</Text></View>
    <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor: '#355FD3', borderRadius: 25, height: 40, maxWidth: 40}}><SearchZoomIn color="#fff" size={25} variant='Outline' /></View>
    <View style={{flex:1, alignItems:'center'}}><VideoPlay color="#000" size={20} variant='Outline' /><Text style={{fontSize: 10}}>Courses</Text></View>
    <View style={{flex:1, alignItems:'center'}}><VideoCircle color="#000" size={20} variant='Outline' /><Text style={{fontSize: 10}}>Watch</Text></View>
    </View>
    
    </DrawerLayoutAndroid>
  );
}
