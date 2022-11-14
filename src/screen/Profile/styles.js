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
  addCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#000000',
  },
  paymentCard: {
    marginRight: 20,
    width: 300,
    height: 200,
    borderRadius: 20,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    alignContent: 'space-between',
  },
  menuText: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#000000',
  },
});
