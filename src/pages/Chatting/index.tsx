import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ChatInput, ChatItem, Header } from '../../components';
import { colors, fonts } from '../../utils';

function Chatting() {
  const route = useRoute();
  const navigation = useNavigation();

  const doctor = route?.params;

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
          <Text style={styles.chatDate}>Senin, 21 Maret 2020</Text>
          <ChatItem isMe />
          <ChatItem />
          <ChatItem isMe />
        </ScrollView>
      </View>
      <ChatInput
        value=""
        onChangeText={() => console.log('onChangeText')}
        onButtonPress={() => console.log('onButtonPress')}
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
