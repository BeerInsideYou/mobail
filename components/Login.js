import React, {useState} from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export function Login({navigation}) {
    const loadScene = () => {
        navigation.navigate('Menu');
    }

    const [userLog, setUserLog] = useState('');
    const [userPass, setUserPass] = useState('');

    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Email...'></TextInput>
        <TextInput style={styles.input} placeholder='Password...'></TextInput>
        <Button title="Войти" onPress={loadScene}/>
      </View>
    );
}


  const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    input: {
        borderRadius: 15,
        width: '70%',
        marginHorizontal: '15%',
        marginVertical: 25,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 18,
        borderBottomColor: '#000',
        borderStyle: 'solid',
        borderBottomWidth: 2
    }
  });