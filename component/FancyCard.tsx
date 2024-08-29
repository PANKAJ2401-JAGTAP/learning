import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image 
            source={{
                uri: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*fYA-b-KA9UUqPL2OsDYkQw.png'
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahel</Text>
            <Text style={styles.cardLable}> Pink city Jaipur</Text>
            <Text style={styles.cardDesc}> The hawa mahel is a place in a city of jaipur. it's a famous any most tourist place in 
                india and generate a most valuable revenue  for state of rajasthan
            </Text>
            <Text style={styles.cardFooter}>12 min away.</Text>
        </View>
      </View>
    </View>
  )
}

export default FancyCard

const styles=StyleSheet.create({
    headingText:{
        fontSize:24,
        paddingHorizontal:10,
        fontWeight:'bold',
        paddingTop:10
    },
    card:{
        width:370,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4
    },
    cardLable:{
        color:'#000000',
        fontSize:14,
        marginBottom:6
    },
    cardDesc:{
        color:'#242B2E',
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flexShrink:1

    },
    cardFooter:{
        color:'#000000'
    },
    cardElevated:{
        backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            height:1,
            width:1
        }
    },
    cardImage:{
        height:200,
        marginBottom:8,
        borderTopLeftRadius:16,
        borderTopRightRadius:16
    }
})