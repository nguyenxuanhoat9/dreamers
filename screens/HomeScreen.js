import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../components/StarRating';

const HomeScreen = ({navigation}) => {
  const theme = useTheme();

  return (
    <ScrollView style={styles.container}>
      <ImageBackground 
      source={require('../assets/banners/bgr10.jpg')} 
      style={styles.image}
      >
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      {/* <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={false}
          height={200}
          activeDotColor="#0B75FF">
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/he-mat-troi.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/dai-ngan-ha.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/banners/cung-hoang-dao.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View> */}

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Restaurant'})
          }>
          <View style={styles.categoryIcon}>
          <ImageBackground 
            source={require('../assets/banners/image38.jpg')} 
            style={styles.image2}
          >
            <Ionicons name="planet" size={45} color="#FFF" />
            </ImageBackground>
          </View>
          <Text style={styles.categoryBtnTxt}>Các vì sao</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('CardListScreen', {title: 'Fastfood Center'})
          }>
          <View style={styles.categoryIcon}>
          <ImageBackground 
            source={require('../assets/banners/image39.png')} 
            style={styles.image2}
          >
            <MaterialIcons
              name="place"
              size={45}
              color="#FFF"
            />            
            </ImageBackground>
          </View>
          <Text style={styles.categoryBtnTxt}>Ngắm sao</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
          <ImageBackground 
            source={require('../assets/banners/image30.png')} 
            style={styles.image2}
          >
            <MaterialCommunityIcons name="earth" size={45} color="#FFF" />
          </ImageBackground>
          </View>
          <Text style={styles.categoryBtnTxt}>Dự báo</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.categoryContainer, {marginTop: 10}]}>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
          <ImageBackground 
            source={require('../assets/banners/image27.png')} 
            style={styles.image2}
          >
            <MaterialCommunityIcons name="newspaper-variant-outline" size={40} color="#FFF" />
          </ImageBackground>
          </View>
          <Text style={styles.categoryBtnTxt}>Bảng tin </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn}   onPress={() =>
            navigation.navigate('Profile')
            // navigation.navigate('Mapdetail', {title: 'Restaurant'})
            }>
          <View style={styles.categoryIcon}>
          <ImageBackground 
            source={require('../assets/banners/image28.png')} 
            style={styles.image2}
          >
            <Ionicons name="person-outline" size={40} color="#FFF" />
          </ImageBackground>
          </View>
          <Text style={styles.categoryBtnTxt}>Trang cá nhân </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() =>
            navigation.navigate('Notifications')
            // navigation.navigate('Mapdetail', {title: 'Restaurant'})
            }>
          <View style={styles.categoryIcon}>
          <ImageBackground 
            source={require('../assets/banners/image29.png')} 
            style={styles.image2}
          >
            <MaterialIcons name="event-note" size={40} color="#FFF" />
          </ImageBackground>
          </View>
          <Text style={styles.categoryBtnTxt}>Lịch trình </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsWrapper}>
        <Text
          style={{
            // alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFF',
            marginTop: 20,
            marginBottom:5,
          }}>
          Các sự kiện sắp diễn ra: 
        </Text>

        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/banners/saobang.jpeg")}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Mưa sao băng</Text>
            {/* <StarRating ratings={4} reviews={99} /> */}
            <Text style={styles.cardDetails}>
            Mưa sao băng là hiện tượng số lượng lớn sao băng xuất hiện đồng thời...
            </Text>
            <View style={styles.buttonWrap}>
            <TouchableOpacity
            style={styles.viewButon}
            onPress={() =>{
              var date = new Date().getDate(); //Current Date
              var month = new Date().getMonth() + 1; //Current Month
              var year = new Date().getFullYear(); //Current Year
              var hours = new Date().getHours(); //Current Hours
              var min = new Date().getMinutes(); //Current Minutes
              var sec = new Date().getSeconds(); //Current Seconds
              var minisec = new Date().getMilliseconds(); //Current Seconds
              var moment =
                date + '/' + month + '/' + year + ' ' + hours + ':' + min  + ':' + sec + ':' + minisec
              ;
              console.log("time press button:")
              console.log(moment)
              navigation.navigate('Explore', {title: 'Restaurant'})
            }
            // navigation.navigate('Mapdetail', {title: 'Restaurant'})
            }>
              <Text style={styles.viewText}>Xem trên bản đồ</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.viewButon}
            onPress={() =>
            navigation.navigate('Mapdetail', {title: 'Mưa sao băng'})
            // navigation.navigate('Mapdetail', {title: 'Restaurant'})
            }>
              <Text style={styles.viewText}>Chi tiết</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/banners/nhatthuc.jpg")}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Nhật thực</Text>
            {/* <StarRating ratings={4} reviews={99} /> */}
            <Text style={styles.cardDetails}>
            Nhật thực xảy ra khi Mặt Trăng đi qua giữa Trái Đất và Mặt Trời
            </Text>
            <View style={styles.buttonWrap}>
            <TouchableOpacity
            style={styles.viewButon}
            onPress={() =>
            navigation.navigate('Explore', {title: 'Restaurant'})
            // navigation.navigate('Mapdetail', {title: 'Restaurant'})
            }>
              <Text style={styles.viewText}>Xem trên bản đồ</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.viewButon}
            onPress={() =>
            navigation.navigate('Mapdetail', {title: 'Mưa sao băng'})
            // navigation.navigate('Mapdetail', {title: 'Restaurant'})
            }>
              <Text style={styles.viewText}>Chi tiết</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/banners/trangmau.jpg")}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Trăng Máu</Text>
            {/* <StarRating ratings={4} reviews={99} /> */}
            <Text style={styles.cardDetails}>
            Hiện tượng này xảy ra khi mặt trăng di chuyển vào vùng bóng tối của Trái Đất
            </Text>
            <View style={styles.buttonWrap}>
            <TouchableOpacity
            style={styles.viewButon}
            onPress={() =>
            navigation.navigate('Explore', {title: 'Restaurant'})
            // navigation.navigate('Mapdetail', {title: 'Restaurant'})
            }>
              <Text style={styles.viewText}>Xem trên bản đồ</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.viewButon}
            onPress={() =>
            navigation.navigate('Mapdetail', {title: 'Mưa sao băng'})
            // navigation.navigate('Mapdetail', {title: 'Restaurant'})
            }>
              <Text style={styles.viewText}>Chi tiết</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/banners/trangmau.jpg")}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Trăng Máu</Text>
            {/* <StarRating ratings={4} reviews={99} /> */}
            <Text style={styles.cardDetails}>
            Hiện tượng này xảy ra khi mặt trăng di chuyển vào vùng bóng tối của Trái Đất
            </Text>
            <View style={styles.buttonWrap}>
            <TouchableOpacity
            style={styles.viewButon}
            onPress={() =>
            navigation.navigate('Explore', {title: 'Restaurant'})
            // navigation.navigate('Mapdetail', {title: 'Restaurant'})
            }>
              <Text style={styles.viewText}>Xem trên bản đồ</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.viewButon}
            onPress={() =>
            navigation.navigate('Mapdetail', {title: 'Mưa sao băng'})
            // navigation.navigate('Mapdetail', {title: 'Restaurant'})
            }>
              <Text style={styles.viewText}>Chi tiết</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require("../assets/banners/trangmau.jpg")}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Trăng Máu</Text>
            {/* <StarRating ratings={4} reviews={99} /> */}
            <Text style={styles.cardDetails}>
            Hiện tượng này xảy ra khi mặt trăng di chuyển vào vùng bóng tối của Trái Đất
            </Text>
            <View style={styles.buttonWrap}>
            <TouchableOpacity
            style={styles.viewButon}
            onPress={() =>
            navigation.navigate('Explore', {title: 'Restaurant'})
            // navigation.navigate('Mapdetail', {title: 'Restaurant'})
            }>
              <Text style={styles.viewText}>Xem trên bản đồ</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.viewButon}
            onPress={() =>
            navigation.navigate('Mapdetail', {title: 'Mưa sao băng'})
            // navigation.navigate('Mapdetail', {title: 'Restaurant'})
            }>
              <Text style={styles.viewText}>Chi tiết</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#cefefe",
    
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width:  80,
    height: 80,
    backgroundColor: '#BFE8FF' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#FFF',
    fontWeight:'700',
    fontSize:18,
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#BFE8FF',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  image2: {
    flex: 1,
    resizeMode: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 82,
    height: 82,
  },
  viewButon:{
    paddingVertical:5,
    paddingHorizontal:20,
    backgroundColor: '#2A98FF',
    // width: 120,
    borderRadius:5,
    marginTop:5,
  },
  viewText:{
    color: '#FFFFFF',
  },
  buttonWrap:{
    justifyContent: "space-between",
    flexDirection: "row"
  }

});
