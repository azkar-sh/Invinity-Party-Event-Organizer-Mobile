import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {margin: 25, marginTop: 50},
  imageBanner: {
    width: '100%',
    height: 1000,
  },
  textOverlay: {
    marginHorizontal: 25,
    top: 90,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 15,
    letterSpacing: 1.5,
  },
  textFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  dateLocation: {
    fontSize: 16,
    marginVertical: 5,
    color: '#FFF',
    marginLeft: 10,
  },
  smallText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    letterSpacing: 1,
  },
  eventDetailContainer: {
    position: 'absolute',
    top: 360,
    backgroundColor: '#FFF',
    width: '100%',
    // height: 50,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    flexDirection: 'column',
  },
  eventDetailTitle: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 15,
    marginHorizontal: 25,
    marginVertical: 20,
    letterSpacing: 1,
  },
  eventDetailText: {
    fontSize: 16,
    color: '#373A42BF',
    marginHorizontal: 25,
    letterSpacing: 0.5,
    lineHeight: 25,
  },
  eventMaps: {
    marginHorizontal: 25,
    alignSelf: 'center',
    width: '85%',
    height: 150,
    borderRadius: 20,
  },
  buyButton: {
    backgroundColor: '#3366FF',
    width: '85%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 25,
  },
  textButton: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
