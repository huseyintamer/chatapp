import React,{useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import io from 'socket.io-client/dist/socket.io';


const App: () => React$Node = () => {

const socket = useRef(null);
const [message, setMessage ] =useState("");

  const connectionConfig = {
    jsonp: false,
    reconnection: true,
    reconnectionDelay: 100,
    reconnectionAttempts: 100000,
    transports: ['websocket'], 
   };

  useEffect(()=> {
    socket.current = io("http://192.168.1.34:2020", connectionConfig);
  }, [])


const sendMessage = () => {
  socket.current.emit("message",message);
  console.log("mesaj gönderildi");
  setMessage("");
}

  return (
 
  <View style ={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text>hello world</Text>
    <TextInput 
    value={message}
    onChangeText={text => setMessage(text)}
    onSubmitEditing={sendMessage}
    placeholder="Text Input" />
 <Button onPress={sendMessage} title="send"/>
  </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
