import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image,SafeAreaView , FlatList, ScrollView, StyleSheet } from 'react-native';
import { data } from '../model/data';
import Card from '../components/Card';
import { useTheme } from '@react-navigation/native';
import { markers, mapDarkStyle, mapStandardStyle } from '../model/mapData';


const Mapdetail = ({ navigation }) => {

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../assets/banners/saobang.jpeg")}
        style={styles.cardImage}
        resizeMode="stretch"
      />
        <Text style={styles.title}>Thời gian </Text>
        <Text style={styles.timeTitle}>
          Từ ngày 20/06 - 23/06 {"\n"}
          Đạt cực điểm vào khoảng 2h00 ngày 22/06 {"\n"}
          (Theo giờ Việt Nam)
        {/* {"\n"}{"\n"} */}
        </Text>
        {/* <Text style={styles.timedes}>
          Từ ngày 20/06 - 23/06 {"\n"}
          Đạt cực điểm vào đêm 22/06 
        </Text> */}
      <Text style={styles.title}>Thông tin về hiện tượng: </Text>
      <Text style={styles.des}>Một trận mưa sao băng là một sự kiện thiên thể,
        trong đó con người quan sát được một số thiên thạch tỏa sáng, hoặc bắt 
        nguồn từ cùng một điểm trên bầu trời đêm.{"\n"}{"\n"}
        Những thiên thạch này là do các dòng bụi vũ trụ đi vào bầu khí quyển Trái Đất 
        với tốc độ rất cao trên quỹ đạo song song. Các bụi thiên thạch này nhỏ hơn một 
        hạt cát, vì vậy hầu hết chúng đều tan rã và không bao giờ chạm vào bề mặt Trái 
        Đất. {"\n"}{"\n"}
        Những trận mưa sao băng dữ dội hoặc bất thường được biết đến như những cơn bão sao băng và 
        bão thiên thạch, có thể tạo ra hơn 1.000 thiên thạch mỗi giờ.Trung tâm Dữ liệu 
        Sao băng liệt kê khoảng 600 mưa sao băng còn đang nghi ngờ trong đó khoảng 100
        mưa sao băng được khẳng định chính thức</Text>

    </ScrollView>
  );
};

export default Mapdetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'center'
  },
  cardImage: {
    height: 200,
    // width: 200,
  },
  title:{
    marginTop: 10,
    // marginHorizontal:5,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: "#C2EBFF",
    paddingVertical: 5,
    paddingHorizontal:8,
  },
  des:{
    marginTop: 10,
    fontSize: 15,
    marginHorizontal:20,
    lineHeight:18,
    // fontWeight: 'bold'
  },
  timedes:{
    marginTop: 10,
    fontSize: 14,
    marginHorizontal:20,
    lineHeight:16,
    // fontWeight: 'bold'
  },
  timeTitle:{
    marginTop: 10,
    fontSize: 15,
    marginHorizontal:20,
    lineHeight:18,
    // fontWeight: 'bold'
  }
});
