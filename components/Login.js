import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { auth } from '../authserv';


export function Login({navigation}) {
    const [userLog, setUserLog] = useState('');
    const [userPass, setUserPass] = useState('');
    const [data, setData] = useState({})

    const loadScene = () => {
      if(userLog && userPass) {
        auth(userLog, userPass).then(response => {
          console.log(response)
        }).catch(error => console.log(error))
        //navigation.navigate('Menu');
      } else {
        alert("Заполните все поля")
      }
    }

    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={setUserLog}
          style={styles.input}
          placeholder='Email...'>
        </TextInput>

        <TextInput
          onChangeText={setUserPass}
          style={styles.input}
          placeholder='Password...'>
        </TextInput>

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