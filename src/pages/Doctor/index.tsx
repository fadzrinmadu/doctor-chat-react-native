import { useNavigation } from '@react-navigation/native';
import {
  limitToLast,
  onValue,
  orderByChild,
  query,
  ref,
} from 'firebase/database';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  Gap,
  NewsItem,
  HomeProfile,
  DoctorRated,
  DoctorCategory,
} from '../../components';
import { firebaseDB } from '../../config';
import { colors, fonts } from '../../utils';

export default function Doctor() {
  const navigation = useNavigation();

  const [news, setNews] = useState([]);
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const getNews = () => {
    const newsRef = ref(firebaseDB, 'news/');
    onValue(newsRef, (snapshot: any) => {
      const data = snapshot.val();
      const filterData = data.filter((element: any) => element !== null);
      setNews(filterData);
    });
  };

  const getCategoryDoctor = () => {
    const categoryDoctorRef = ref(firebaseDB, 'category_doctor/');
    onValue(categoryDoctorRef, (snapshot: any) => {
      const data = snapshot.val();
      const filterData = data.filter((element: any) => element !== null);
      setCategoryDoctor(filterData);
    });
  };

  const getTopRatedDoctor = () => {
    const topRatedDoctorRef = query(
      ref(firebaseDB, 'doctors/'),
      orderByChild('rate'),
      limitToLast(3)
    );
    onValue(topRatedDoctorRef, (snapshot: any) => {
      const oldData = snapshot.val();
      const data: any = [];

      Object.keys(oldData).map((key) => {
        data.push({
          id: key,
          data: oldData[key],
        });
      });

      setDoctors(data);
    });
  };

  useEffect(() => {
    getNews();
    getCategoryDoctor();
    getTopRatedDoctor();
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {categoryDoctor.map((item: any) => (
                  <DoctorCategory
                    key={item.id}
                    category={item.category}
                    onPress={() => navigation.navigate('ChooseDoctor', item)}
                  />
                ))}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Category</Text>
            {doctors.map((doctor: any) => (
              <DoctorRated
                key={doctor.id}
                name={doctor.data.fullname}
                description={doctor.data.category}
                picture={{ uri: doctor.data.photo }}
                onPress={() => navigation.navigate('DoctorProfile', doctor)}
              />
            ))}
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          {news.length > 0 &&
            news.map((item: any) => (
              <NewsItem
                key={item.id}
                title={item.title}
                image={item.image}
                date={item.date}
              />
            ))}
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
