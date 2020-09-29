import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Image: {
    // flex: 1,
    height: 810,
    width: 450,

    position: 'absolute',
  },
  logo: {
    alignSelf: 'center',

    height: 320,
    width: 440,
    top: 190,
    left: -6,
  },

  text: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 26,
    top: 130,
    fontFamily: 'Open Sans',
  },
  headline: {
    padding: 15,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 26,
    fontFamily: 'Open Sans',
  },
  button: {
    left: 66,
    top: 230,
    height: 70,
    width: 300,
    backgroundColor: '#EF3651',
    borderRadius: 15,
    borderWidth: 1,
  },
});
export default styles;
