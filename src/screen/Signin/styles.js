import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  signinContainer: {margin: 25, marginTop: 50},
  signinTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  signinSubtitle: {
    fontSize: 15,
    color: '#000',
    marginBottom: 10,
    marginTop: 10,
  },
  signinLoginNav: {color: '#3366FF', fontWeight: 'bold'},
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
  forgotPassword: {
    textAlign: 'right',
    color: '#3366FF',
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
  signupSubtitle: {
    fontSize: 15,
    color: '#000',
    marginVertical: 15,
    textAlign: 'center',
  },
  signupNav: {
    color: '#3366FF',
    fontWeight: 'bold',
  },
  signinAlternativeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  signinAlternativeText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 15,
  },
  signinAlternativeBox: {
    width: 100,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#3366FF',
    borderWidth: 1,
    marginHorizontal: 5,
  },
  signinAlternativeIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
