import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {marginTop: 30, flexDirection: 'column', flexWrap: 'wrap'},
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  image: {
    marginHorizontal: 10,
    width: 175,
    height: 275,
  },
  textOverlay: {
    marginHorizontal: 15,
    top: 140,
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
    padding: 5,
    width: 35,
    marginTop: 10,
  },
});
