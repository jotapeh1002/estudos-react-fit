// import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

type ComponentUser = string;

export function User({ user }: { user: ComponentUser }) {
  return (
    <View style={styles.readerUserContainer}>
      <Text style={styles.homeTitle} > Olá {user} </Text>
      <Image
        style={styles.imgUser}
        source={require('../../assets/prato.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  homeTitle: {
    fontSize: 35,
  },
  readerUserContainer: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgUser: {
    borderRadius: 100,
    height: 55,
    left: -10,
    width: 55,
    borderColor:'black',
  },
})
