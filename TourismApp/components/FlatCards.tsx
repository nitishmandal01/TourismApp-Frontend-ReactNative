import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]} >
          <Text style={styles.whiteTextColor}>Red Card</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]} >
          <Text style={styles.whiteTextColor}>Green Card</Text>
        </View>
        <View style={[styles.card, styles.cardThree]} >
          <Text style={styles.whiteTextColor}>Yelow Card</Text>
        </View>
        <View style={[styles.card, styles.cardFour]} >
          <Text style={styles.whiteTextColor}>Blue Card</Text>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'darkblue',
    paddingHorizontal: 10,
  },
  container:{
    flex:1,
    flexDirection: 'row',
    padding:8
  },
  card:{
    flex:1,
    justifyContent:'center',
    alignItems : 'center',
    width:100,
    height:100,
    borderRadius:6,
    margin:8
  },
  cardOne:{
    backgroundColor:"#BA2F16"
  },
  cardTwo:{
    backgroundColor:"#019031"
  },
  cardThree:{
    backgroundColor:"#DFAF2B"
  },
  cardFour:{
    backgroundColor:"#2475B0"
  },
  whiteTextColor:{
    color:'white'
  }
});
