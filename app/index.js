import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import { Stack } from 'expo-router';

import { useState } from 'react';
import {CalculatorBoard} from "../components";

import {COLORS} from "../constants";


const Home = () =>{
    const [text, setText] = useState({
        numberText: "",
        displayText: ""
    });

    return(
        <SafeAreaView style={{
            backgroundColor: COLORS.white,
            height: "100%",
        }}>
            <Stack.Screen
            style={{flex: 1, backgroundColor: COLORS.primary}}
            options={{
                headerStyle: {backgroundColor: COLORS.primary}, 
                headerShadowVisible: false,
                headerLeft: () => (
                    <Text>Dark Mode here</Text>
                ),
                headerTitle: "",
            }}   
                
            />

            <View style={{height:"40%"}}>
                <Text>{text.displayText}</Text>
            </View>


            <CalculatorBoard  text={text} setText={setText}/>
                
        </SafeAreaView>
    )
}

export default Home;