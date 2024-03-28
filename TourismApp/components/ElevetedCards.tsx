import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View>
      <Text style={styles.headingText}>Places to visit in India</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardEleveted]}>
          <Image
            source={{
              uri: 'https://resources.thomascook.in/images/holidays/sightSeeing/92126_Anjuna_Beach_Goa_India_960.jpg',
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Image
            source={{
              uri: 'https://c.myholidays.com/blog/blog/content/images/2020/11/Kashmir.webp',
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Image
            source={{
              uri: 'https://c.myholidays.com/blog/blog/content/images/2020/11/Rajasthan.webp',
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Image
            source={{
              uri: 'https://c.myholidays.com/blog/blog/content/images/2020/11/Sikkim.webp',
            }}
            style={styles.cardImage}
          />
        </View>

        <View style={[styles.card, styles.cardEleveted]}>
          <Image
            source={{
              uri: 'https://c.myholidays.com/blog/blog/content/images/2021/04/Coorg.webp',
            }}
            style={styles.cardImage}
          />
        </View>
      </ScrollView>
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
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 10,
  },
  cardEleveted: {
    backgroundColor: 'teal',
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowColor: '#000',
    shadowRadius: 5,
  },
  whiteTextColor: {
    color: 'white',
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
});
