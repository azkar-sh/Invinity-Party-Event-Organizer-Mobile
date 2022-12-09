import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

import AllEventCard from '../../components/AllEventCard';
import axios from '../../utils/axios';
import {useState} from 'react';
import {useEffect} from 'react';

export default function AllEvent(props) {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState('ASC');
  const [totalPage, setTotalPage] = useState(10);
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    getDataEvent();
  }, [sort]);

  useEffect(() => {
    getDataEvent();
  }, [page]);

  const getDataEvent = async () => {
    try {
      if (page <= totalPage) {
        const result = await axios.get(
          `event?page=${page}&limit=4&sortColumn=createdAt&sortType=${sort}&dateTimeShow=&name=`,
        );
        if (page === 1) {
          setData(result.data.data);
        } else {
          setData([...data, ...result.data.data]);
        }
        setTotalPage(result.data.pagination.totalPage);
      } else {
        setLast(true);
      }
      setRefresh(false);
      setLoading(false);
      setLoadMore(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSort = () => {
    if (sort === 'ASC') {
      setSort('DESC');
    } else {
      setSort('ASC');
    }
  };

  const handleRefresh = () => {
    setPage(1);
    setLast(false);
    if (page !== 1) {
      setRefresh(true);
    } else {
      getDataEvent();
    }
  };

  const handleLoadMore = () => {
    if (!loadMore) {
      // false
      const newPage = page + 1; // 1 + 1 = 2
      setLoadMore(true);
      if (newPage <= totalPage + 1) {
        setLoading(true);
        setPage(newPage);
      } else {
        setLoading(false);
      }
    }
  };

  return (
    // <View style={styles.backgroundColor}>
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={styles.filterTitle}>
          {sort !== 'ASC' ? 'Latest Event' : 'Past Event'}
        </Text>
        <TouchableOpacity style={styles.filterButton} onPress={handleSort}>
          <Icon color="blue" size={20} name="filter" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        style={styles.cardContainer}
        numColumns={2}
        renderItem={({item}) => (
          <AllEventCard
            key={item.eventId}
            data={item}
            navigation={props.navigation}
          />
        )}
        onRefresh={handleRefresh}
        refreshing={refresh}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          <View>
            {last ? (
              <Text style={styles.endData}>
                -- Stay tune for Upcoming Event --
              </Text>
            ) : loading ? (
              <ActivityIndicator size="large" color="blue" />
            ) : null}
          </View>
        }
      />
    </View>
    // </View>
  );
}
