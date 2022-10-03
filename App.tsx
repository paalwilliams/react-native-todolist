/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {IToDoItem} from './components/ToDoItem';
import ToDoItemForm from './components/ToDoItemForm';
import ToDoList from './components/ToDoList';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [toDoItems, setToDoItems] = useState<IToDoItem[]>([]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'white' : 'white',
    flex: 1,
    margin: '5%',
  };

  const addToDoItem = (toDoItem: IToDoItem) => {
    setToDoItems((items: IToDoItem[]) => [...items, toDoItem]);
  };

  const toggleComplete = (id: string) => {
    toDoItems.find((todoItem, idx) => {
      if (todoItem.id === id) {
        todoItem.complete = !todoItem.complete;
        let td = toDoItems;
        td[idx] = todoItem;
        setToDoItems([...td]);
        return true;
      }
    });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ToDoList items={toDoItems} toggleComplete={toggleComplete} />
      <ToDoItemForm addToDoItem={addToDoItem} />
    </SafeAreaView>
  );
};

export default App;
