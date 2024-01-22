import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import ModalScreen from './ModalScreen';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <Text style={styles.showModalText}>Show modal message</Text>
      </Pressable>
      <ModalScreen visible={modalVisible} onClose={handleClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showModalText: {
    fontSize: 18,
    color: 'blue',
  },
});
