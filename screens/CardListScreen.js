import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import {data} from '../model/data';
import Card from '../components/Card';

const CardListScreen = ({navigation}) => {

    const renderItem = ({item}) => {
        // return (
        //     <Card 
        //         itemData={item}
        //         onPress={()=> navigation.navigate('CardItemDetails', {itemData: item})}
        //     />
        // );
    };

    return (
      <View style={styles.container}>
        {/* <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        /> */}
        <Text>Thong tin ve dia diem</Text>
        <Text>Thong tin ve hien tuong</Text>
        <Text>cac dia diem lan can</Text>
        {/* <Text>Thong tin ve dia diem</Text> */}
      </View>
    );
};

export default CardListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '90%',
    alignSelf: 'center'
  },
});
