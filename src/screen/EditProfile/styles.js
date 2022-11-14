import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  backgroundTop: {
    backgroundColor: '#3366FF',
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginTop: 40,
  },
  profileContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileBorder: {
    width: 150,
    height: 150,
    borderRadius: 150,
    borderWidth: 5,
    borderColor: '#3366FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    borderRadius: 100,
    width: 125,
    height: 125,
  },
  profileName: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#000000',
  },
  profileJob: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 20,
  },
  labelForm: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  nameForm: {
    borderColor: '#C1C5D0',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginBottom: 25,
    marginTop: 10,
  },
  flexForm: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  editForm: {
    color: '#3366FF',
    marginLeft: 10,
    textDecorationLine: 'underline',
    letterSpacing: 1,
  },
});
