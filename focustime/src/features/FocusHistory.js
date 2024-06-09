import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { fontSizes } from '../utils/sizes';
import {spacing} from '../utils/sizes'

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return <Text style={styles.title}>The history is empty 👻</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>⚪ {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we have focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  item: {
    fontSize: fontSizes.md,
    color: 'white',
    paddingTop: spacing.md
  },
  title: {
    color: 'white',
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
});
