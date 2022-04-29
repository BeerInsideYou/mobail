import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';
import {Map} from './components/Map';
import { x1rpc } from './Api'




export default function App() {
  const [appState, setAppState] = useState({});
  useEffect(() => {
    x1rpc('client.data', 'read', {
      model: 'INFO_RECIPIENT',
      msource: 'toop',
      withDisplay: true,
    }).then(response => {
      const allResponse = response;
      setAppState(allResponse)
    })
  }, [setAppState])

  const [marks, setMark] = useState([]);

  for(var i = 0; i < appState.total; i++) {
    marks[i] = appState.items[i].GEO_POSITION_LIVE;
  }

  return (
    <View style={styles.container}>
      <Text>Text</Text>
      <Map appState={appState} marks={marks}/>
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});