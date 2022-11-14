import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  signupContainer: {margin: 25, marginTop: 50},
  signupTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  signupSubtitle: {
    fontSize: 15,
    color: '#000',
    marginBottom: 10,
    marginTop: 10,
  },
  signupLoginNav: {color: '#3366FF', fontWeight: 'bold'},
  authField: {marginTop: 40},
  authForm: {
    borderColor: '#C1C5D0',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  showPassword: {
    position: 'absolute',
    left: 325,
    bottom: 30,
  },
  checkboxValidation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});
