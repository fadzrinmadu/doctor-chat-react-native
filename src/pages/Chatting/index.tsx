import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { ChatInput, ChatItem, Header } from '../../components';
import { colors, fonts, getChatTime, getData, setDateChat } from '../../utils';
import { firebaseDB } from '../../config';
import { child, onValue, push, ref, set } from 'firebase/database';

function Chatting() {
  const route = useRoute();
  const navigation = useNavigation();
  const doctor = route?.params;

  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});
  const [chats, setChats] = useState([]);

  const chatSend = () => {
    const today = new Date();

    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };
    setChatContent('');

    const chatId = `${user?.uid}_${doctor?.uid}`;
    const dateChat = setDateChat(today);
    const newChatKey = push(child(ref(firebaseDB), 'chatting')).key;

    const urlFirebase = `/chatting/${chatId}/chats/${dateChat}/${newChatKey}`;
    set(ref(firebaseDB, urlFirebase), data);

    const urlMessageUser = `/messages/${user?.uid}/${chatId}`;
    const urlMessageDoctor = `/messages/${doctor?.uid}/${chatId}`;

    const dataHistoryChatForUser = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: doctor?.uid,
    };

    const dataHistoryChatForDoctor = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: user?.uid,
    };

    set(ref(firebaseDB, urlFirebase), data);
    set(ref(firebaseDB, urlMessageUser), dataHistoryChatForUser);
    set(ref(firebaseDB, urlMessageDoctor), dataHistoryChatForDoctor);
  };

  const getDataUserFromLocal = () => {
    getData('user').then((response: any) => {
      setUser(response);
    });
  };

  useEffect(() => {
    getDataUserFromLocal();

    const chatId = `${user?.uid}_${doctor?.uid}`;
    const urlFirebase = `/chatting/${chatId}/chats/`;
    const chattingRef = ref(firebaseDB, urlFirebase);

    onValue(chattingRef, (snapshot: any) => {
      if (snapshot.val()) {
        const dataSnapshot = snapshot.val();
        const dataChats: any = [];

        Object.keys(dataSnapshot).map((key) => {
          const dataChat = dataSnapshot[key];
          const newDataChat: any = [];

          Object.keys(dataChat).map((item: any) => {
            newDataChat.push({
              id: item,
              data: dataChat[item],
            });
          });

          dataChats.push({
            id: key,
            data: newDataChat,
          });
        });

        setChats(dataChats);
      }
    });
  }, [doctor, user]);

  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        photo={doctor?.photo}
        title={doctor?.fullname}
        description={doctor?.category}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {chats.length > 0 &&
            chats.map((chat: any) => (
              <View key={chat.id}>
                <Text style={styles.chatDate}>{chat.id}</Text>
                {chat.data.map((item: any) => {
                  const isMe = item.data.sendBy === user.uid;

                  return (
                    <ChatItem
                      key={item.id}
                      text={item.data.chatContent}
                      date={item.data.chatTime}
                      isMe={isMe}
                      photo={isMe ? null : { uri: doctor.photo }}
                    />
                  );
                })}
              </View>
            ))}
        </ScrollView>
      </View>
      <ChatInput
        value={chatContent}
        onChangeText={(value: string) => setChatContent(value)}
        onButtonPress={chatSend}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});

export default Chatting;
