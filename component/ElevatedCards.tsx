import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    

} from 'react-native'

export default function ElevatedCard(){
    return(
        <View >
            <Text style={styles.headingText}>Elevated Card</Text>
            <ScrollView  horizontal={true} style={styles.container}>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text>Me</Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text>Scroll</Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text>More..</Text>
                </View>
                <View style={[styles.card,styles.cardElevated]}>
                    <Text>😊</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    headingText:{
        fontSize:24,
        paddingHorizontal:10,
        fontWeight:"bold",
        paddingTop:10
    },
    container:{
        padding:8,
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:4,
        color:"#000000"
    },
    cardElevated:{
        backgroundColor:"#CAD5E2",
        elevation:10,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#E65E00',
        shadowOpacity:0.4,
        textShadowRadius:2
    },
})