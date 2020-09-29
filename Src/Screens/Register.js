import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import styles from '../Styles/SigninStyle';
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      hide: true,
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/logo.jpg')}
            style={styles.logo}
          />
          <Text style={styles.headline2}>Sign up to continue</Text>

          <Text style={styles.username}>Username</Text>
          <TextInput
            autoCapitalize="none"
            underlineColorAndroid="white"
            autoCorrect={false}
            keyboardType="default"
            placeholderTextColor="gray"
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})}
            style={{top: 100, width: 395, left: 20, color: 'white'}}
          />
          <Text style={styles.email1}>Email</Text>
          <TextInput
            autoCapitalize="none"
            underlineColorAndroid="white"
            autoCorrect={false}
            keyboardType="default"
            placeholderTextColor="#EF3651"
            value={this.state.email}
            onChangeText={(text) => this.setState({email: text})}
            style={{top: 125, width: 395, left: 20, color: 'white'}}
          />
          <Text style={styles.password1}>Password</Text>
          <TextInput
            autoCapitalize="none"
            underlineColorAndroid="white"
            autoCorrect={false}
            keyboardType="default"
            placeholderTextColor="#EF3651"
            secureTextEntry={this.state.hide}
            value={this.state.password}
            onChangeText={(text) => this.setState({password: text})}
            style={{top: 155, width: 395, left: 20, color: 'white'}}
          />
          <View>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.headline1}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
