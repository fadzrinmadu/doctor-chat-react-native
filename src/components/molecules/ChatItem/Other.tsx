import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import { DummyDoctor9 } from '../../../assets';
import { colors, fonts } from '../../../utils';

function Other({ text, date, photo }: any) {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={photo} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingLeft: 16,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.primary,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomleftRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
});


export default Other;
