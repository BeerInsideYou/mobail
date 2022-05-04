import React from 'react';
import { Map } from './components/Map';
import { Login } from './components/Login';
import {Menu} from './components/Menu'


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Login'
                component={Login}
                options={{title: 'Авторизация'}}
            />

           <Stack.Screen
                name='Map'
                component={Map}
                options={{title: 'Карта'}}
            />

            <Stack.Screen
                name='Menu'
                component={Menu}
                options={{title: 'Меню'}}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}