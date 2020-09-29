import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../Styles/SigninStyle';
export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

          <Text style={styles.headline}>welcome back, sign in to continue</Text>
          <View>
            <Text style={styles.email}>Email</Text>
            <TextInput
              autoCapitalize="none"
              underlineColorAndroid="white"
              autoCorrect={false}
              keyboardType="default"
              // placeholderTextColor=""
              value={this.state.email}
              onChangeText={(text) => this.setState({email: text})}
              style={{top: 60, width: 395, left: 20, color: 'white'}}
            />
            <Text style={styles.password}>Password</Text>
            <TextInput
              autoCapitalize="none"
              underlineColorAndroid="white"
              autoCorrect={false}
              keyboardType="default"
              // placeholderTextColor="#EF3651"
              secureTextEntry={this.state.hide}
              value={this.state.password}
              onChangeText={(text) => this.setState({password: text})}
              style={{top: 90, width: 395, left: 20, color: 'white'}}
            />
          </View>
          <View>
            <Text style={styles.forgot}>Forget Password ?</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.headline1}>Login</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.new}>New user?</Text>
            <TouchableOpacity onPress={() => this.props.navigate('Register')}>
              <Text
                style={{
                  color: '#EF3651',
                  marginLeft: 235,
                  position: 'absolute',
                  fontSize: 18,
                  marginTop: 250,
                  fontFamily: 'roboto',
                }}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
