import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function ActionCards() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Cards</Text>

      <View style={[styles.card, styles.elevetedCard]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Best Places to visit in Delhi</Text>
        </View>

        <Image
          source={{
            uri: 'https://media-cdn.tripadvisor.com/media/photo-s/16/e0/7b/c2/picture-clicked-at-the.jpg',
          }}
          style={styles.cardImage}
        />

        <View style={styles.cardBodyContainer}>
          <Text numberOfLines={2}>
            Top Attractions in New Delhi · 1. Qutub Minar · 13,390. Points of
            Interest & Landmarks · 2. Swaminarayan Akshardham · 11,991.
            Religious Sites · 3. Humayun's Tomb
          </Text>
        </View>

        <View style={styles.cardFooterContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.cypressgreen.in/blog/things-to-do-in-delhi'
              )
            }>
            <Text style={styles.link}>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.instagram.com/thenitishmandal')
            }>
            <Text style={styles.link}>Follow On Instagram</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.card, styles.elevetedCard]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Places to visit in Goa</Text>
        </View>

        <Image
          source={{
            uri: 'https://resources.thomascook.in/images/holidays/sightSeeing/92126_Anjuna_Beach_Goa_India_960.jpg',
          }}
          style={styles.cardImage}
        />

        <View style={styles.cardBodyContainer}>
          <Text numberOfLines={2}>
            Goa is the most popular destination for beachside holidays in India.
            It is the smallest state in the country by area, located on the
            southwestern coast. The region is blessed with beautiful scenic
            views, magnificent beaches, glorious natural landforms, tons of
            popular tourist attractions, and much more. It was also a major site
            of Portuguese colonial settlement in Asia, which reigned from 1510
            to 1961.
          </Text>
        </View>

        <View style={styles.cardFooterContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.thomascook.in/india-tourism/places-to-visit-in-goa'
              )
            }>
            <Text style={styles.link}>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.instagram.com/thenitishmandal/')
            }>
            <Text style={styles.link}>Follow On Instagram</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.card, styles.elevetedCard]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Places to visit in Goa</Text>
        </View>

        <Image
          source={{
            uri: 'https://www.holidify.com/images/bgImages/MUNNAR.jpg',
          }}
          style={styles.cardImage}
        />

        <View style={styles.cardBodyContainer}>
          <Text numberOfLines={2}>
            To note here, many of the popular Kerala tourist destinations like
            Munnar, Vagamon, Ramakkalmedu, Marayur, and Thekkady are located
            within this
          </Text>
        </View>

        <View style={styles.cardFooterContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.holidify.com/state/kerala/top-destinations-places-to-visit.html'
              )
            }>
            <Text style={styles.link}>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.instagram.com/thenitishmandal/')
            }>
            <Text style={styles.link}>Follow On Instagram</Text>
          </TouchableOpacity>
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
  card: {
    width: 380,
    // height:320,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevetedCard: {
    backgroundColor: '#DAE0E2',
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: '#192A56',
    shadowOpacity: 0.4,
  },
  headerContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '800',
  },
  cardImage: {
    height: 200,
  },
  cardBodyContainer: {
    padding: 9,
  },
  cardFooterContainer: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  link: {
    fontSize: 13,
    color: 'white',
    backgroundColor: '#0A3D62',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 7,
  },
});
