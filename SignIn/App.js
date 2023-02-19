import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, useWindowDimensions,Pressable, SafeAreaView} from 'react-native';
import CreateAccount from './src/CreateAccount';
import SignInScreen from '/Users/kemish/Documents/GIT/Intake/src/SignIn';

const App = () => {
  return (
    <SafeAreaView>
      <SignInScreen />
      {/* <CreateAccount/> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: '70%',
    maxheight: 100,
    resizeMode: 'contain'
  },
  root: {
    alignItems: 'center',
    padding: 20
  },
});

export default App;