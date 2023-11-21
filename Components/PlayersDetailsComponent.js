import { View, Text, StyleSheet } from "react-native"
const PlayersDetailsComponent = (props) => {
    const {player1Details , player2Details} = props
    return (<>
    <View style={styles.heading}>
    <Text style={styles.headingText}>Score Board</Text>
</View>
    <View style={styles.container}>

<View style={styles.player1}>
<Text style={styles.text1}>Player 1</Text>
    <Text style={styles.text2}>{player1Details.name} </Text>
    <Text style={styles.text}>Score : </Text>
    <Text style={styles.text}>Won : {player1Details.Won}/5</Text>
    <Text style={styles.text}>loose : {player1Details.loose}/5 : </Text>
</View>
<View style={styles.player2}>
    <Text style={styles.text1}>Player 2</Text>
    <Text style={styles.text2}>{player2Details.name} </Text>
    <Text style={styles.text}>Score : </Text>
    <Text style={styles.text}>Won : {player2Details.Won}/5</Text>
    <Text style={styles.text}>loose : {player2Details.loose}/5 : </Text>
</View>
</View>
    </>   
    )
}
export default PlayersDetailsComponent


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    player1: {
        flex: 1,
        backgroundColor: '#9b686e',
        padding: 3,
        height : '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    player2: {
        flex: 1,
        height : '100%',
        padding: 3,
        backgroundColor: '#649791',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color : 'orange',
        fontSize: 20,
        borderBottomWidth: 1,
        borderColor: 'black',
        
        marginBottom: 10
    }
    ,
    text1: {
        color : 'yellow',
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 30

    },
    text2: {
        color : 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10


    },
    heading: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    headingText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})