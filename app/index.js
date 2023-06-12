import {View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native'
import { Stack } from 'expo-router';

import { useState } from 'react';
import {CalculatorBoard} from "../components";

import {COLORSD, COLORSL} from "../constants";
import {moon, sun} from '../styles';

let icon;
let theme;

const Home = () =>{
    const [text, setText] = useState("");
    const [darkMode, setDarkMode] = useState(true);

    function dynamicFontSize(){
        if(text.length >= 25){
            return 24;
        } else if (text.length >= 50){
            return 16;
        }
        return 48;
    }

    function changeLightMode(){
        setDarkMode(!darkMode);
    }

    if(darkMode){
        icon = sun;
        theme = COLORSD;
    } else {
        icon = moon;
        theme = COLORSL;
    }

    return(
        <SafeAreaView style={{
            backgroundColor: theme.white,
            height: "100%",
        }}>
            <Stack.Screen
            style={{flex: 1, backgroundColor: theme.primary}}
            options={{
                headerStyle: {backgroundColor: theme.primary}, 
                headerShadowVisible: false,
                headerLeft: () => (
                    <TouchableOpacity 
                    style={{height:"100%", justifyContent:"center", alignItems:"center"}}
                    onPress={changeLightMode}
                    >
                        <Image source={icon}  resizeMode='contain' style={{height: 30, width:30}}/>
                    </TouchableOpacity>
                ),
                headerTitle: "",
            }}   
                
            />

            <View style={{height:"35%", backgroundColor:theme.secondary}}>
                <Text style={{color:theme.white, fontFamily:"Ubuntu", fontSize:dynamicFontSize(), textAlign:"right", textAlignVertical:"bottom", height:"100%"}}>{text}</Text>
            </View>


            <CalculatorBoard  text={text} setText={setText} theme={theme}/>
                
        </SafeAreaView>
    )
}

export default Home;