import React, {useState} from "react";
import { StyleSheet, Text, View, Button,} from 'react-native';

export function Menu({navigation}) {
    const loadScene = () => {
        navigation.navigate('Map');
    }

    return (
        <View style={styles.container}>
          <Button title="Календарь"/>
          <Button title="Карта" onPress={loadScene}/>
          <Button title="Отчеты"/>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },  
    
})