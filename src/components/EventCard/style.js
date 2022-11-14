import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {marginTop: 30, flexDirection: 'row'},
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  image: {
    marginHorizontal: 10,
    width: 200,
    height: 300,
  },
  textOverlay: {
    marginHorizontal: 15,
    top: 160,
  },
  dateOverImage: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  titleOverImage: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
    letterSpacing: 1,
  },
  buttonOverImage: {
    backgroundColor: '#FC1055',
    borderRadius: 10,
    padding: 10,
    width: 40,
    marginTop: 10,
  },
});
