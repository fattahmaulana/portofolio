import React from 'react';
import { Marquee } from '@animatereactnative/marquee';
import { Text, Image, View, StyleSheet, ImageSourcePropType } from 'react-native';

export const Tape: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Marquee Component */}
      <Marquee speed={1.5} spacing={20} style={styles.marqueeContainer}>
        {/* Custom Content */}
        <Image
          source={{ uri: 'https://placekitten.com/200/200' } as ImageSourcePropType}
          style={styles.image}
        />
        <Text style={styles.text}>Limited-time offers available now!</Text>
        <Image
          source={{ uri: 'https://placekitten.com/200/200' } as ImageSourcePropType}
          style={styles.image}
        />
        <Text style={styles.text}>Sign up today for exclusive discounts!</Text>
      </Marquee>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marqueeContainer: {
    paddingVertical: 10,
    backgroundColor: '#333',
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});