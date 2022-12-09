import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  backgroundTop: {backgroundColor: '#3366FF'},
  container: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  image: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  tableheaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tableheaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    width: '65%',
    letterSpacing: 1.5,
  },
  tableheaderPrice: {
    fontSize: 14,
    color: 'magenta',
    width: '20%',
    letterSpacing: 1,
  },
  tableheaderSort: {
    width: 70,
    height: 70,
  },
  tableBody: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  ticketImage: {
    alignSelf: 'flex-start',
  },
  ticketName: {
    marginHorizontal: 20,
    marginRight: 100,
  },
  ticketPrice: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 12,
    color: 'grey',
  },
  quantityContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantity: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 1,
  },
  quantityForm: {
    width: 50,
    marginLeft: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButtonPlus: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginRight: 10,
    backgroundColor: '#FFF',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
  },
  quantityButtonMinus: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginLeft: 10,
    backgroundColor: '#FFF',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
  },
  quantityAmount: {
    marginHorizontal: 20,
    color: '#000',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  subTotalContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  checkoutButton: {
    backgroundColor: '#3366FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '75%',
  },
  checkoutText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    letterSpacing: 1,
  },
  subTotalText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 1,
  },
  subTotalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3366FF',
    letterSpacing: 1,
  },
});
