import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';

export const Map = ({ marks, appState }) => {
    const [region, setRegion] = useState({
        latitude: 57.8136, 
        longitude: 28.3496,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    var adress = 'Какая-то улица';
    return (
        <View>
          <Text>{adress}</Text>
            <MapView
                style={styles.map}
                initialRegion={region}
            >{marks.map((marker, i) => (
                <Marker
                  coordinate={{ latitude: +marker.split(',')[0], longitude: +marker.split(',')[1] }}
                  onPress={() => {adress = appState.items[i].STREET_WORK}}
                />
              ))}
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height - 200,
    },
  });