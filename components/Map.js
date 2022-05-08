import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';
import { x1rpc } from '../Api';

export const Map = () => {
  //Создаем начальные координаты Пскова
    const [region, setRegion] = useState({
        latitude: 57.8136, 
        longitude: 28.3496,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    const [adress, setAdress] = useState('Адрес');
    const [marks, setMark] = useState([]);
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
  
  //Заполняем массив марок с их координатами
  for(var i = 0; i < appState.total; i++) {
    marks[i] = appState.items[i].GEO_POSITION_LIVE;
  }
    
    return (
        <View>
          <Text style={styles.adres}>{adress}</Text>
            <MapView
                style={styles.map}
                initialRegion={region}
            >{marks.map((marker, i) => (
                <Marker
                  key={i}
                  coordinate={{ latitude: +marker.split(',')[0], longitude: +marker.split(',')[1] }}
                  onPress={() => setAdress('Адрес: ' + appState.items[i].STREET_WORK)}
                />
              ))}
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height - 110,
    },
    adres: {
      marginTop: 30,
      paddingLeft: 10,
      fontSize: 20
    }
  });