import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {backgroundColor: '#3366FF'},
  form: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    marginVertical: 30,
    marginHorizontal: 30,
    borderRadius: 10,
    color: '#FFFFFF',
    paddingHorizontal: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#222B45',
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    paddingTop: 25,
    paddingBottom: '100%',
  },
  dateText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
  eventContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
    paddingVertical: 25,
    paddingBottom: '100%',
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    position: 'absolute',
    width: '100%',
    marginTop: 225,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
});
