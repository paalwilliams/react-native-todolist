import React from 'react';
import {FlatList, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Item, {IToDoItem} from './ToDoItem';

// const DATA: IToDoItem[] = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//     complete: true,
//     subtitle: 'Wow more text',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//     complete: false,
//     subtitle: 'Wow more text',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//     complete: true,
//     subtitle: 'Wow more text',
//   },
// ];

interface IToDoListProps {
  items: IToDoItem[];
  toggleComplete: (id: string) => void;
}

const ToDoList = (props: IToDoListProps) => {
  const {items, toggleComplete} = props;

  const renderItem = ({item}: {item: IToDoItem}) => {
    return (
      <>
        <Item
          item={item}
          onPress={() => toggleComplete(item.id)}
          textColor="black"
        />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 50,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ToDoList;
