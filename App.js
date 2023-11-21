import { useEffect, useState } from 'react';
import { Button, Pressable } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import PlayersDetailsComponent from './Components/PlayersDetailsComponent';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AddPlayers from './Components/AddPlayers';
import image from './assets/Images/Winner.gif';

export default function App() {

  const [image, setimage] = useState('zero');
  const [player1Details, setplayer1Details] = useState({ name: '', Won: 0, loose: 0 })
  const [player2Details, setplayer2Details] = useState({ name: '', Won: 0, loose: 0 })
  const [InputModal, setInputModal] = useState(false)
  const [cells, setCells] = useState({ cell1: '', cell2: '', cell3: '', cell4: '', cell5: '', cell6: '', cell7: '', cell8: '', cell9: '' });
  const [totalRounds, setTotalRounds] = useState(1);
  const [winner, setWinner] = useState('');
  const [FinalWinner , setFinalwinner] = useState('');
  const symbols = {
    zero: "shield-sun",
    cross: "skull-crossbones"
  }
  const [count, setCount] = useState(1);
  const [gif , setGif] = useState(false);
  const closeModal = () => {
    setInputModal(false);
  }

  const checkWinner = () => {
    setCount(count + 1);
    console.log(count)
    if (
      cells.cell1 && cells.cell1 === cells.cell2 && cells.cell2 === cells.cell3
    ) {
      return cells.cell1
    }
    else if (
      cells.cell4 && cells.cell4 === cells.cell5 && cells.cell5 === cells.cell6
    ) {
      return cells.cell4
    }
    else if (
      cells.cell7 && cells.cell7 === cells.cell8 && cells.cell8 === cells.cell9
    ) {
      return cells.cell7
    }
    else if (cells.cell1 && cells.cell1 === cells.cell5 && cells.cell5 === cells.cell9) {
      return cells.cell1

    } else if (cells.cell3 && cells.cell3 === cells.cell5 && cells.cell5 === cells.cell7) {
      return cells.cell3

    } else if (cells.cell1 && cells.cell1 === cells.cell4 && cells.cell4 === cells.cell7) {
      return cells.cell1

    } else if (cells.cell2 && cells.cell2 === cells.cell5 && cells.cell5 === cells.cell8) {
      return cells.cell2

    } else if (cells.cell3 && cells.cell3 === cells.cell6 && cells.cell6 === cells.cell9) {
      return cells.cell3
    }
    else if (count == 9 && winner == '') {
      setCells({ cell1: '', cell2: '', cell3: '', cell4: '', cell5: '', cell6: '', cell7: '', cell8: '', cell9: '' })
      setCount(1);
      setWinner('');
      alert('draw')
    } else {
      return 'nothing'
    }
  }

  const clickedCells = (cellnumber) => {
    if (!(player1Details.name && player2Details.name)) {
      setInputModal(true);
    } else {
      if (image === 'zero') {
        setimage('cross');
        setCells({ ...cells, [cellnumber]: 'cross' })
      } else if (image === 'cross') {
        setimage('zero')
        setCells({ ...cells, [cellnumber]: 'zero' })
      }
      const wonPlayer = checkWinner()
      if (wonPlayer != 'nothing') {
        if (wonPlayer == "cross") {
          setplayer1Details({ ...player1Details, Won: player1Details.Won + 1 });
          setplayer2Details({ ...player2Details, loose: player2Details.loose + 1 });
          alert(player1Details.name + "Won this Round");
          setTotalRounds(totalRounds + 1);
        } else if (wonPlayer == 'zero') {
          setplayer1Details({ ...player1Details, loose: player1Details.loose + 1 });
          setplayer2Details({ ...player2Details, Won: player2Details.Won + 1 });
          alert(player2Details.name + "Won this Round")
          setTotalRounds(totalRounds + 1);
        } else {
          alert('draw')
        }
        setCells({ cell1: '', cell2: '', cell3: '', cell4: '', cell5: '', cell6: '', cell7: '', cell8: '', cell9: '' })
        setimage('zero');
        setCount(1);
      }
    }
  }

  const restartGame = () => {
    setplayer1Details({ ...player1Details, Won: 0, loose: 0 })
    setplayer2Details({ ...player2Details, Won: 0, loose: 0 })
    setTotalRounds(1);
  }

  const closeGif = () => {
    setGif(false);
  }

  useEffect(() => {
    if (totalRounds == 6 || player1Details.Won == 3 || player2Details.Won == 3) {
      if(player1Details.Won ==3){
        setFinalwinner(player1Details.name);
      }else{
        setFinalwinner(player2Details.name);
      }
      setGif(true);
      restartGame()
    }
  }, [totalRounds])

  return (
    <View style={styles.container}>
      <Text style={styles.headingup}>Tic-Tac-Toe</Text>
      <View style={styles.Table}>
        <View style={styles.row}>
          <Pressable disabled={cells.cell1 !== '' ? true : false} onPress={() => { clickedCells('cell1') }}>
            <View style={styles.cells}><MaterialCommunityIcons style={styles.image} name={`${cells.cell1 == 'zero' ? "shield-sun" : cells.cell1 == 'cross' ? "skull-crossbones" : ''}`} size={122} color="black" /></View>
          </Pressable>
          <Pressable disabled={cells.cell2 !== '' ? true : false} onPress={() => { clickedCells('cell2') }}>
            <View style={styles.cells}><MaterialCommunityIcons style={styles.image} name={`${cells.cell2 == 'zero' ? "shield-sun" : cells.cell2 == 'cross' ? "skull-crossbones" : ''}`} size={122} color="black" />
            </View>
          </Pressable>
          <Pressable disabled={cells.cell3 !== '' ? true : false} onPress={() => { clickedCells('cell3') }}>
            <View  ><MaterialCommunityIcons style={styles.image} name={`${cells.cell3 == 'zero' ? "shield-sun" : cells.cell3 == 'cross' ? "skull-crossbones" : ''}`} size={122} color="black" /></View>
          </Pressable>
        </View>
        <View style={styles.row}>
          <Pressable disabled={cells.cell4 !== '' ? true : false} onPress={() => { clickedCells('cell4') }}>
            <View style={styles.cells}><MaterialCommunityIcons style={styles.image} name={`${cells.cell4 == 'zero' ? "shield-sun" : cells.cell4 == 'cross' ? "skull-crossbones" : ''}`} size={122} color="black" /></View>
          </Pressable>
          <Pressable disabled={cells.cell5 !== '' ? true : false} onPress={() => { clickedCells('cell5') }}>
            <View style={styles.cells}><MaterialCommunityIcons style={styles.image} name={`${cells.cell5 == 'zero' ? "shield-sun" : cells.cell5 == 'cross' ? "skull-crossbones" : ''}`} size={122} color="black" /></View>
          </Pressable>
          <Pressable disabled={cells.cell6 !== '' ? true : false} onPress={() => { clickedCells('cell6') }}>
            <View  ><MaterialCommunityIcons style={styles.image} name={`${cells.cell6 == 'zero' ? "shield-sun" : cells.cell6 == 'cross' ? "skull-crossbones" : ''}`} size={122} color="black" /></View>
          </Pressable>
        </View>
        <View style={styles.lastrow}>
          <Pressable disabled={cells.cell7 !== '' ? true : false} onPress={() => { clickedCells('cell7') }}>
            <View style={styles.cells}><MaterialCommunityIcons style={styles.image} name={`${cells.cell7 == 'zero' ? "shield-sun" : cells.cell7 == 'cross' ? "skull-crossbones" : ''}`} size={122} color="black" /></View>
          </Pressable>
          <Pressable disabled={cells.cell8 !== '' ? true : false} onPress={() => { clickedCells('cell8') }}>
            <View style={styles.cells}><MaterialCommunityIcons style={styles.image} name={`${cells.cell8 == 'zero' ? "shield-sun" : cells.cell8 == 'cross' ? "skull-crossbones" : ''}`} size={122} color="black" /></View>
          </Pressable>
          <Pressable disabled={cells.cell9 !== '' ? true : false} onPress={() => { clickedCells('cell9') }}>
            <View  ><MaterialCommunityIcons style={styles.image} name={`${cells.cell9 == 'zero' ? "shield-sun" : cells.cell9 == 'cross' ? "skull-crossbones" : ''}`} size={122} color="black" /></View>
          </Pressable>
        </View>
      </View>
      <PlayersDetailsComponent player1Details={player1Details} player2Details={player2Details} />
      {gif && <>
      <View style = {styles.gifContainer}>
      <Image style = {styles.gif} source={require('./assets/Images/Winner.gif')}/>
      </View>
      <View  style = {styles.WinnerName}>
      <Text style={styles.RoundText2} >{FinalWinner}</Text>
      </View>
      <Text style = {styles.RoundText} onPress={() => {closeGif()}}>Click Here to play another game</Text>
      </> }
      <View style={styles.round}>
        <Text style={styles.RoundText} >Round {totalRounds}</Text>
      </View>
      
      {InputModal && <AddPlayers setInputModal={setInputModal} InputModal={InputModal} setplayer1Details={setplayer1Details} setplayer2Details={setplayer2Details}
        player1Details={player1Details} player2Details={player2Details}
      />}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    flex: 1,
    fontSize: 30,
  },
  headingup: {
    flex: 0.4,
    fontSize: 30,
    fontWeight: 'bold'

  },
  Table: {
    flex: 1.5,
    backgroundColor: '#ffff',
    width: '98%'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 6,
    borderBottomColor: 'black'
  },
  lastrow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 122,
    width: 122
  },
  cells: {
    borderRightWidth: 6,
    borderColor: 'black'

  },
  LastCellsHor: {
    borderRightWidth: 0,
    borderColor: 'black'
  },
  round: {
    position: 'absolute',
    top: 0,
    right: 10,
    backgroundColor: 'white',
    fontWeight: 'bold',
    borderRadius: 30,
    height: 40,
    width: 90,
    borderWidth: 2,
    borderColor: 'green',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center'
  },
  RoundText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  RoundText2: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  gifContainer: {
    position: 'absolute',
    top: 100,
    left:6,
    height : 100,
    width : 100,
    backgroundColor: 'red'
  },
  gif:{
    height : 382,
    width : 400,
  },
  WinnerName:{
    position: 'absolute',
    top : 348,
    right : 163,
  }
});
