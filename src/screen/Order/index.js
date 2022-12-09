import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import BlueWhite from '../../components/CustomButton/blueWhite';

import regTicket from '../../assets/images/reg-ticket.png';
import vipTicket from '../../assets/images/vip-ticket.png';
import vvipTicket from '../../assets/images/vvip-ticket.png';

export default function Order() {
  const [listBooking, setListBooking] = useState([]);
  const [regTicketCount, setRegTicketCount] = useState(0);
  const [vipTicketCount, setVipTicketCount] = useState(0);
  const [vvipTicketCount, setVvipTicketCount] = useState(0);

  // const [totalPrice, setTotalPrice] = useState(0);

  const incrementCount = ticketType => {
    if (ticketType === 'reg') {
      setRegTicketCount(regTicketCount + 1);
    } else if (ticketType === 'vip') {
      setVipTicketCount(vipTicketCount + 1);
    } else if (ticketType === 'vvip') {
      setVvipTicketCount(vvipTicketCount + 1);
    }
  };

  const decrementCount = ticketType => {
    if (ticketType === 'reg') {
      if (regTicketCount > 0) {
        setRegTicketCount(regTicketCount - 1);
      }
    } else if (ticketType === 'vip') {
      if (vipTicketCount > 0) {
        setVipTicketCount(vipTicketCount - 1);
      }
    } else if (ticketType === 'vvip') {
      if (vvipTicketCount > 0) {
        setVvipTicketCount(vvipTicketCount - 1);
      }
    }
  };

  const totalPrice =
    regTicketCount * 15 + vipTicketCount * 35 + vvipTicketCount * 50;

  useEffect(() => {
    getDataBooking();
  }, []);

  const getDataBooking = () => {
    // https://www.notion.so/Modul-Booking-293a2b5a8f2b4d09a8e1f25304592c22
    const DATADUMMY = {
      status: 200,
      message: 'Success Get Data Section By Event Id',
      data: [
        {
          section: 'REG1-1',
          booked: 30,
          available: 0,
          statusFull: true,
        },
        {
          section: 'REG1-2',
          booked: 15,
          available: 15,
          statusFull: false,
        },
        {
          section: 'REG1-3',
          booked: 0,
          available: 30,
          statusFull: false,
        },
        {
          section: 'REG1-4',
          booked: 30,
          available: 0,
          statusFull: true,
        },
        {
          section: 'VVIP1-1',
          booked: 5,
          available: 5,
          statusFull: false,
        },
      ],
    };
    const seat = [
      {
        type: 'VVIP',
        section: 1,
      },
      {type: 'VIP', section: 7},
      {type: 'REG', section: 9},
    ];
    const result = seat.map(item => {
      let data = []; // VVIP, VIP, REG
      for (let i = 1; i <= 4; i++) {
        // DIGUNAKAN UNTUK MENCARI DATA TIAP BAGIAN
        for (let j = 1; j <= item.section; j++) {
          // DIGUNAKAN UNTUK MENCARI DATA TIAP SECTION
          const filterSeat = DATADUMMY.data.filter(
            dataSeat => dataSeat.section === `${item.type}${i}-${j}`, // VVIP1-1 === VVIP1-1
          );
          // filterSeat = [{
          //   section: 'VVIP1-1',
          //   booked: 5,
          //   available: 5,
          //   statusFull: false,
          // }]
          const checkData = data.filter(
            dataAvailable => dataAvailable.type === item.type,
          ); // DIGUNAKAN UNTUK MENCARI TAU APAKAH TYPE SUDAH MASUK KE DALAM VARIABEL DATA ?
          // checkData = []
          if (checkData.length < 1) {
            // pengecekan data
            if (filterSeat.length < 1) {
              // JIKA DATA BELUM MASUK KEDALAM DATA BOOKING
              data.push({
                type: item.type,
                section: `${item.type}${i}-${j}`,
                available: item.type.includes('VVIP')
                  ? 10
                  : item.type.includes('VIP')
                  ? 20
                  : 30,
              });
            }
            if (filterSeat.length > 0 && !filterSeat[0]?.statusFull) {
              // JIKA DATA SUDAH MASUK KEDALAM DATA BOOKING
              data.push({
                type: filterSeat[0].section.includes('VVIP')
                  ? 'VVIP'
                  : item.type.includes('VIP')
                  ? 'VIP'
                  : 'REG',
                section: filterSeat[0].section,
                available: filterSeat[0].available,
              });
            }
          }
        }
      }
      return data;
    });
    // result = [[{type: "REG",section: "REG1-1", available: 30}], [{type: "VIP",section: "VIP1-1", available: 20}], [{type: "VVIP",section: "VVIP1-1", available: 5}]]
    const newResult = result.map(item => item[0]);
    // newResult = [
    //   {type: 'REG', section: 'REG1-1', available: 30},
    //   {type: 'VIP', section: 'VIP1-1', available: 20},
    //   {type: 'VVIP', section: 'VVIP1-1', available: 5},
    // ];
    setListBooking(newResult);
  };

  return (
    <ScrollView style={styles.backgroundTop}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/seat.png')}
          style={styles.image}
        />
        <View style={styles.tableheaderContainer}>
          <Text style={styles.tableheaderTitle}>Tickets</Text>
          <Text style={styles.tableheaderPrice}>By Price</Text>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/sort-button.png')}
              style={styles.tableheaderSort}
            />
          </TouchableOpacity>
        </View>
        {/* Regular Ticket */}
        <View>
          <View style={styles.tableBody}>
            <Image source={regTicket} style={styles.ticketImage} />
            <View style={styles.ticketName}>
              <Text style={styles.titleText}>SECTION REGULAR</Text>
              <Text style={styles.subtitle}>Ticket Available</Text>
              <View style={styles.quantityContainer}>
                <Text style={styles.quantity}>Quantity</Text>
                <View style={styles.quantityForm}>
                  <TouchableOpacity
                    style={styles.quantityButtonMinus}
                    onPress={() => decrementCount('reg')}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityAmount}>{regTicketCount}</Text>
                  <TouchableOpacity
                    style={styles.quantityButtonPlus}
                    onPress={() => incrementCount('reg')}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.ticketPrice}>
              <Text style={styles.titleText}>$15</Text>
              <Text style={styles.subtitle}>per person</Text>
            </View>
          </View>
        </View>

        {/* VIP TICKET */}
        <View>
          <View style={styles.tableBody}>
            <Image source={vipTicket} style={styles.ticketImage} />
            <View style={styles.ticketName}>
              <Text style={styles.titleText}>SECTION VIP</Text>
              <Text style={styles.subtitle}>Ticket Available</Text>
              <View style={styles.quantityContainer}>
                <Text style={styles.quantity}>Quantity</Text>
                <View style={styles.quantityForm}>
                  <TouchableOpacity
                    onPress={() => decrementCount('vip')}
                    style={styles.quantityButtonMinus}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityAmount}>{vipTicketCount}</Text>
                  <TouchableOpacity
                    style={styles.quantityButtonPlus}
                    onPress={() => incrementCount('vip')}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.ticketPrice}>
              <Text style={styles.titleText}>$35</Text>
              <Text style={styles.subtitle}>per person</Text>
            </View>
          </View>
        </View>

        {/* VVIP TICKET */}
        <View>
          <View style={styles.tableBody}>
            <Image source={vvipTicket} style={styles.ticketImage} />
            <View style={styles.ticketName}>
              <Text style={styles.titleText}>SECTION VVIP</Text>
              <Text style={styles.subtitle}>Ticket Available</Text>
              <View style={styles.quantityContainer}>
                <Text style={styles.quantity}>Quantity</Text>
                <View style={styles.quantityForm}>
                  <TouchableOpacity
                    style={styles.quantityButtonMinus}
                    onPress={() => decrementCount('vvip')}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityAmount}>{vvipTicketCount}</Text>
                  <TouchableOpacity
                    style={styles.quantityButtonPlus}
                    onPress={() => incrementCount('vvip')}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.ticketPrice}>
              <Text style={styles.titleText}>$50</Text>
              <Text style={styles.subtitle}>per person</Text>
            </View>
          </View>
        </View>

        <View style={styles.totalContainer}>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
          <View style={styles.subTotalContainer}>
            <Text style={styles.subTotalText}>Price</Text>
            <Text style={styles.subTotalPrice}>$ {totalPrice}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
