import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import react from 'react';

export default function FancyCards() {
  return (
    <ScrollView>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.elevetedCards]}>
        <Image
          source={{
            uri: 'https://miro.medium.com/v2/resize:fit:603/1*fYA-b-KA9UUqPL2OsDYkQw.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLable}>Pink City, Jaipur</Text>
          <Text style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India.
            Built from red and pink sandstone, it is on the edge of the City
            Palace, Jaipur.
          </Text>
          <Text style={styles.cardFooter}>
            12 mins away from Jaipur Airport
          </Text>
        </View>
      </View>

      <View style={[styles.card, styles.elevetedCards]}>
        <Image
          source={{
            uri: 'https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/m_activities_delhi_red_fort_l_341_817.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Red Fort</Text>
          <Text style={styles.cardLable}>New Delhi</Text>
          <Text style={styles.cardDescription}>
            Located in Chandni Chowk Old Delhi, this red sandstone structure was
            constructed under the reign of Mughal emperor Shah Jahan for
            protection against invaders. It is known for its intricate Mughal
            architecture and floral designs.
          </Text>
          <Text style={styles.cardFooter}>5 mins away from Delhi Airport</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'darkblue',
    paddingHorizontal: 10,
  },
  card: {
    width: 380,
    height: 400,
    borderRadius: 6,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  elevetedCards: {
    backgroundColor: 'white',
    elevation: 4,
    color: '#000000',
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  cardImage: {
    height: 200,
    marginBottom: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLable: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#616C6F',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 12,
  },
  cardFooter: {
    color: '#000000',
  },
});
