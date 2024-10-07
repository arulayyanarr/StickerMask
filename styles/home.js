import { StyleSheet } from 'react-native';
//import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;

const styles = StyleSheet.create({
  footer: {
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row', // Align buttons in a row
    justifyContent: 'space-around', // Space them evenly
    alignItems: 'center',
    elevation: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 10,
    
  },
    divMain: {
      flex: 1,
      top: statusBarHeight,
      flexDirection: 'column',
      gap:10,
      //overflow: 'scroll'
    },
    divMenuRow: {
      flex: 1,
      flexDirection: 'row', // Align items in a row
      justifyContent: 'space-between', // Space between items
      maxHeight: 20,
      marginLeft:20,
      marginRight:20,
      marginTop:10
    },
    leftItem: {
      //padding: 10,
    },
    rightItem: {
      //padding: 10,
    },
    divGradient: {
      //background: linear-gradient(180deg, #334D99 -29.19%, #355FD3 100%),
      //height: 150,
      padding:20,
      //flex:1,
      flexDirection: 'column',
      //flexGrow: 1,
      gap: 10
    },
    gradientBoldText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 14,
      //flex: 1,
    },
    gradientNormalText: {
      color: '#fff',
      fontWeight: '200',
      fontSize: 12,
    },
    curvedBottom: {
      borderBottomLeftRadius: 10,  // Adjust for the desired curve
      borderBottomRightRadius: 10,  // Adjust for the desired curve
      elevation: 5,                 // For Android shadow
      shadowColor: '#000',         // For iOS shadow
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    InputTextSearch:{
      backgroundColor: "#fff",
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 10,
    },
    instaCard: {
        height: 300,
        //flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 3,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        gap: 10
    },
    instaCardImage:{
        height: 170,
        width: 'auto',
        borderRadius: 20,
    },
    sectionHead: {
        //flex: 1,
        fontWeight: '700',
        fontSize: 20,
        paddingLeft: 20
    },
    divRowLR: {
      //flex: 1,
      flexDirection: 'row', // Align items in a row
      justifyContent: 'space-between', // Space between items
      width:'auto'
    },
    instaList: {
      height: 100,
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 20,
      elevation: 3,
      marginLeft: 20,
      marginRight: 20,
      padding: 10,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 5,
      gap: 10
  },
  instaListImage:{
      height: 'auto',
      width: 100,
      borderRadius: 20,
  },
  });
  
  export default styles;