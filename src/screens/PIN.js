import React from 'react';
import { TouchableOpacity, ScrollView, Text, View, StyleSheet } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import QRCode from 'react-native-qrcode-svg';
import IconFeather from 'react-native-vector-icons/Feather';
import {showMessage} from "react-native-flash-message";
import { Separator } from '../helpers/jsxlib';
import { getAppFont, copyToClipboard } from '../helpers/helpers';
import { PinCode, PinCodeT } from 'fedapay-react-native-pincode';
import AsyncStorage from '@react-native-async-storage/async-storage';


const PIN = ({route, navigation}) => {
 
  const customTexts = {

    set: {
        title: 'Set up a new PIN',
        subTitle: 'Enter 6 digits',
        repeat: 'Enter new PIN again',
        error: "PIN don't match. Start the process again.",
        cancel: undefined,
    },
  }

 return ( 
  <View style={styles.container}> 
    <ScrollView styles={{backgroundColor:"white"}}>
    <PinCode mode={PinCodeT.Modes.Set} visible={true}  onSetCancel={() => {}}
          options={{
            pinLength: 6,
            maxAttempt: 9999999,
            lockDuration: 10000,
            allowedReset: true,
            disableLock: false,
            dotColor: "black"
          }}
      styles={{ 
        main: { backgroundColor:"white" },
        enter: {
          titleContainer: { borderWidth: 0 },
          title: { color: 'black' },
          subTitle: { color: 'black' },
          buttonContainer: { borderWidth: 0 , color: 'black' },
          buttonText: { color: 'black' },
          buttons: { backgroundColor: 'white', borderWidth: 1 },
          footer: { borderWidth: 0 },
          footerText: { color: 'purple' },
          pinContainer: { borderWidth: 0,  },
          
         
        },
      }} 
      onSetSuccess={(newPin) => {
          AsyncStorage.setItem('@AppPIN', "SET").then( (newPin) => 
          {
            alert('App PIN successfully set!')
            navigation.navigate('Settings')
          })
        } 
      }

      textOptions={customTexts}
      />

  </ScrollView>
  </View>
  )
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 30,
    margin: 0,
    backgroundColor: "white",
    alignItems:"center",
    justifyContent: "center"
   },
      rowStyle: {
        flexDirection: 'row',
        fontSize: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:5
      },
});

export default PIN;
