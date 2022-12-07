import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginVertical: 30,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    padding: 25,
    height: 1000,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 18,
    color: '#000000',
    marginBottom: 20,
    letterSpacing: 1,
  },
  wishlistContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    elevation: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
  },
  dateContainer: {
    flexDirection: 'column',
    marginRight: '10%',
    alignItems: 'center',
    elevation: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
  },
  date: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  month: {
    fontSize: 16,
    color: 'blue',
  },
});
