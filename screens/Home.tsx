import React,{useState} from "react";
import { View,Text,TouchableOpacity,TextInput,Button } from "react-native";
import Styles from '../styles/Styles'

import {getCountry} from '../redux/action';
import {connect} from "react-redux";

type Props = {
    getCountry: Function
    navigation:{
         navigate: Function 
    }
}

const Home=({getCountry,navigation}:Props)=>{
    const [country, setCountry]= useState('')
    const handelClick=()=>{
        getCountry(country,navigation)
    }
    return(
        <View style={Styles.container}>
            <TextInput onChangeText={(val)=>{setCountry(val)}} style={Styles.input}/>
            <View style={Styles.bt}>
                
                <Button 
                   title="Go"
                   onPress={handelClick}
                   disabled={country.length===0}
                />
            </View>
        </View>
    )
}
export default connect(null,{getCountry})(Home);