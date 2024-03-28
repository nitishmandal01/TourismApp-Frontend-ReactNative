import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import react from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Nitish Kumar Mandal',
      status: 'Just an extra ordinary Software Developer',
      imageUrl: 'https://avatars.githubusercontent.com/u/112858894?v=4',
    },
    {
      uid: 2,
      name: 'Aman Chaudhry',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/112754680?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: 'darkblue',
    marginBottom: 12,
    marginTop:12
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
    
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
    backgroundColor: '#6A89CC',
    padding: 8,
    borderRadius:10
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 14,
  },
  userName: {
    fontSize: 17,
    fontWeight: '600',
  },
  userStatus: {
    fontSize: 12,
    color: 'white',
  },
});
