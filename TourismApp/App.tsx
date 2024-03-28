import React from 'react';
import { SafeAreaView, View, Text, Button, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevetedCards from './components/ElevetedCards';
import FancyCards from './components/FancyCards';
import BlogCards from './components/BlogCard'
import ContactList from './components/ContactList'
function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevetedCards />
        <FancyCards/>
        <ContactList/>  
        <BlogCards/>
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;
