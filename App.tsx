import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './component/FlatCards'
import ElevatedCard from './component/ElevatedCards'
import FancyCard from './component/FancyCard'
import ActionCard from './ActionCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElevatedCard/>   
        <FancyCard/> 
        <ActionCard/>
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default App