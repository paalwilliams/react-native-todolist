import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

export interface IToDoItem {
  title: string;
  subtitle: string;
  complete: boolean;
  id: string;
  date: Date;
}

const Item = ({
  item,
  onPress,
  backgroundColor,
}: {
  item: IToDoItem;
  onPress: any;
  backgroundColor?: any;
  textColor: any;
}) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    item: {
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 24,
      width: '80%',
      color: item.complete ? 'green' : 'red',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 14,
      marginBottom: 3,
      color: item.complete ? 'green' : 'red',
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>
          {item.complete ? 'Complete' : 'To Do'}
        </Text>
      </View>
      <View>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.subtitle}>{item.date.toDateString()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
