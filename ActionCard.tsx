import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
  function openWebsite(websiteLink:string){
    Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's New in a Javascript 21 - ES12
          </Text>
        </View>
        <Image 
          source={{
            uri:'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGlnZXJ8ZW58MHx8MHx8fDA%3D'
          }}
          style={styles.cardImage}
        />
          <View style={styles.bodyContainer}>
            <Text  style={styles.bodyContainer} numberOfLines={3}>Just like a every year javascript brings a new feacture.
              This years javascript bringing 4 new feactures almost roll out from production.
              I won't a wasting a most time and directly jump on understand a code.
            </Text>
              <View style={styles.footerContainer}>
                <TouchableOpacity onPress={() => openWebsite('https://www.w3schools.com/typescript/typescript_tuples.php')}>
                  <Text style={styles.socialLink}> Read More</Text>
                </TouchableOpacity>
              
                <TouchableOpacity onPress={() => openWebsite('https://www.w3schools.com/typescript/typescript_tuples.php')}>
                  <Text style={styles.socialLink}> follow me</Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8,
    },
  card:{
    width:370,
    height:360,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16
  },
  elevatedCard:{
    backgroundColor:'#E07C24',
    elevation:3,
    shadowOffset:{
      width:1,
      height:1
    },
    shadowColor:'#000000',
    shadowOpacity:0.4
  },
  headingContainer:{
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  headerText:{
    color:'#000000',
    fontSize:16,
    fontWeight:"600"
  },
  cardImage:{
    height:180,
    //paddingHorizontal:6,
    marginHorizontal:6
  },
  bodyContainer:{
    //color:'#ffffff',
    padding:10
    
  },
  footerContainer:{
    //color:'#ffffff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    padding:8
  },
  socialLink:{
    fontSize:16,
    color:'#000000',
    backgroundColor:'#ffffff',
    paddingHorizontal:20,
    paddingVertical:6,
    borderRadius:6,
    fontWeight:'bold'
  }
})