import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#3366FF',
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
    marginBottom: 50,
    paddingBottom: 100,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 30,
  },
  filterButton: {
    backgroundColor: '#FFF',
    borderColor: '#FC1055',
    borderRadius: 10,
    padding: 10,
    width: 40,
    marginTop: 10,
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  filterTitle: {
    color: '#FC1055',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  cardContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  endData: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 12,
    letterSpacing: 2,
    marginVertical: 20,
  },
});
