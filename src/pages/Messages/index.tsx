import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List } from '../../components';
import { colors, fonts } from '../../utils';
import { DummyDoctor4, DummyDoctor5, DummyDoctor6 } from '../../assets';

export default function Messages() {
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

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map((doctor) => (
          <List
            key={doctor.id}
            name={doctor.name}
            description={doctor.description}
            picture={doctor.picture}
          />
        ))}
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
