import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './Screens/Main';
import Signin from './Screens/Signin';
import Register from './Screens/Register';

export const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
      mode: 'none',
    },
    Signin: {
      screen: Signin,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
      mode: 'none',
    },
    Register: {
      screen: Register,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'Signin',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
// const AuthLoadingScreen = createAppContainer(MainNavigation);
// export default Signin;
