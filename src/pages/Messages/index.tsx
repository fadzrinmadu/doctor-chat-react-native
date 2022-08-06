import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List } from '../../components';
import { colors, fonts, getData } from '../../utils';
import { DummyDoctor4, DummyDoctor5, DummyDoctor6 } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { firebaseDB } from '../../config';
import { onValue, ref } from 'firebase/database';

export default function Messages() {
  const navigation = useNavigation();

  const [user, setUser] = useState({});
  const [historyChat, setHistoryChat] = useState([]);

  const [doctors] = useState([
    {
      id: 1,
      name: 'Alexander Jannie',
      description: 'Baik ibu, terima kasih banyak atas wakt...',
      picture: DummyDoctor4,
    },
    {
      id: 2,
      name: 'Nairobi Putri Hayza',
      description: 'Oh tentu tidak karena jeruk it...',
      picture: DummyDoctor5,
    },
    {
      id: 3,
      name: 'John McParker Steve',
      description: 'Oke menurut pak dokter bagaimana unt...',
      picture: DummyDoctor6,
    },
  ]);

  const getDataUserFromLocal = () => {
    getData('user').then((response: any) => {
      setUser(response);
    });
  };

  useEffect(() => {
    getDataUserFromLocal();
    const urlHistory = `messages/${user?.uid}`;
    const messagesRef = ref(firebaseDB, urlHistory);
    onValue(messagesRef, (snapshot) => {
      if (snapshot.val()) {
        const oldData = snapshot.val();
        const data: any = [];

        Object.keys(oldData).map(async (key) => {
          const urlUidDoctor = `doctors/${oldData[key].uidPartner}`;
          const doctorsRef = ref(firebaseDB, urlUidDoctor);
          onValue(doctorsRef, (snapshotDoctor) => {
            data.push({
              id: key,
              detailDoctor: snapshotDoctor.val(),
              ...oldData[key],
            });
          });
        });

        setHistoryChat(data);
      }
    });
  }, [user?.uid]);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {historyChat.map((item) => {
          const doctor = {
            ...item?.detailDoctor,
          };

          return (
            <List
              key={item?.id}
              name={item?.detailDoctor?.fullname}
              picture={{uri: item?.detailDoctor?.photo}}
              description={item?.lastContentChat}
              onPress={() => navigation.navigate('Chatting', doctor)}
            />
          );
        })}
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
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
