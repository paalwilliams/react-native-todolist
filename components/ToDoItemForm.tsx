import React from 'react';
import {Alert, Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {IToDoItem} from './ToDoItem';

interface IToDoItemFormProps {
  addToDoItem: (item: IToDoItem) => void;
}
const ToDoItemForm = (props: IToDoItemFormProps) => {
  const {addToDoItem} = props;
  const [primaryText, setPrimaryText] = React.useState<string>();
  const [secondaryText, setSecondaryText] = React.useState<string>();

  const styles = StyleSheet.create({
    input: {
      borderColor: 'gray',
      margin: 5,
      borderWidth: 1,
      borderRadius: 5,
      padding: '3%',
      fontSize: 24,
    },
  });

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const numbers = '1234567890'.split('');
  const symbols = '!@#$%^&*'.split('');

  const generateId = () => {
    let id: string = '';
    let i = 0;
    while (i < 10) {
      id += alphabet[Math.floor(Math.random() * alphabet.length)];
      id += numbers[Math.floor(Math.random() * numbers.length)];
      id += symbols[Math.floor(Math.random() * symbols.length)];
      i++;
    }
    return id;
  };

  const clearInputs = () => {
    setPrimaryText('');
    setSecondaryText('');
  };

  const prepareToDoItem = () => {
    if (!(secondaryText && primaryText)) {
      Alert.alert('Missing Input');
      return;
    }

    const item: IToDoItem = {
      complete: false,
      id: generateId(),
      subtitle: secondaryText as string,
      title: primaryText as string,
      date: new Date(),
    };
    addToDoItem(item);
    clearInputs();
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setPrimaryText}
        value={primaryText}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        onChangeText={setSecondaryText}
        value={secondaryText}
        placeholder="Description"
      />
      <Button title="Add To Do Item" onPress={prepareToDoItem} />
    </SafeAreaView>
  );
};

export default ToDoItemForm;
