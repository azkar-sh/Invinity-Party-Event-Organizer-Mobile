import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {marginVertical: 30, flexDirection: 'row'},
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
  dateOverImage: {
    top: 220,
    left: 20,
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  titleOverImage: {
    top: 220,
    left: 20,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonOverImage: {
    top: 44,
    left: 20,
    backgroundColor: '#FC1055',
    borderRadius: 10,
    padding: 10,
    width: 40,
  },
});
