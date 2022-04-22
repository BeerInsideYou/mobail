import React, {useState} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';



export default function App() {
  const [region, setRegion] = useState({
    latitude: 57.8136, 
    longitude: 28.3496,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  
  const onRegionChange = (region) => {
    setRegion(region)
  }
  const [mark, setMark] = useState()
  return (
    <View style={styles.container}>
      <Text>HEADER</Text>

      <MapView style={styles.map}
      initialRegion={region}
      onRegionChange={onRegionChange}
      onPress={(e) => {
        alert(JSON.stringify(e.nativeEvent.coordinate))}
      }
      >
        <Marker
         coordinate={{ latitude : 57.8136 , longitude : 28.3496 }}
        />
      </MapView>

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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 200,
  },
});