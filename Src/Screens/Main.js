import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../Styles/MainStyle';
export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <ImageBackground
          source={require('../../assets/main.jpg')}
          style={styles.Image}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.jpg')}
          />
          <Text style={styles.text}>Explore new fashion</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigate('Sigin')}>
            <Text style={styles.headline}>Get Started</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
