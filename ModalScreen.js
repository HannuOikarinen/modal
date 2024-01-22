import React from 'react';
import { View, Text, Modal, Pressable, StyleSheet } from 'react-native';

const ModalScreen = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>This is the modal content.</Text>
          <Pressable onPress={onClose}>
            <Text style={styles.closeButton}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
  closeButton: {
    marginTop: 10,
    color: 'blue',
    textAlign: 'center',
  },
});

export default ModalScreen;
