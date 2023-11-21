import { useEffect, useState } from "react";
import { Modal, View, Text, Button, StyleSheet, Pressable, TextInput } from "react-native";

const AddPlayers = (props) => {
  const { InputModal, setInputModal, setplayer1Details, setplayer2Details, player1Details, player2Details } = props;

  const [playerNames, setPlayerNames] = useState({ player1Name: '', player2Name: '' });

  const addPlayersData = () => {
    if (playerNames.player1Name && playerNames.player2Name) {
        setplayer1Details({ ...player1Details, name: playerNames.player1Name });
        setplayer2Details({ ...player2Details, name: playerNames.player2Name });
        setInputModal(false);
      } else {
        alert('All fields are required');
      }
  };

  return (
    <Modal
      animationType="slide"
      visible={InputModal}
    >
      <View style={styles.container}>
        <Text style={styles.text1}>Enter Details To Continue</Text>
        <TextInput
          onChangeText={text => setPlayerNames(prevState => ({ ...prevState, player1Name: text }))}
          placeholder="Enter Player 1 Name"
          style={styles.textInput}
        />
        <TextInput 
          onChangeText={text2 => setPlayerNames(prevState => ({ ...prevState, player2Name: text2 }))}
          placeholder="Enter Player 2 Name"
          style={styles.textInput}
        />
        <View style={styles.buttonCont}>
          <Button onPress={addPlayersData} title="Add Players" />
          <Button onPress={() => setInputModal(false)} title="Cancel" />
        </View>
      </View>
    </Modal>
  );
};

export default AddPlayers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e03675'
  },
  buttonCont: {
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    width: 200,
    justifyContent: 'space-evenly'
  },
  textInput: {
    height: 50,
    color: '#e03675',
    width: '95%',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  text1: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 30
  }
});
