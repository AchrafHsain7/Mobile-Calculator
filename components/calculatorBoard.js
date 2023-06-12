import  CalculatorElement from "./calculatorElement";
import CalculatorEqual from "./calculatorEqual";

import {View} from 'react-native';

import { useEffect, useState } from "react";



const CalculatorBoard = ({text, setText, theme})=>{

 
    const ALLOWEDINPUTS = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "C", "=", ".", "(", ")"]


    function numberClicked(name){
        setText(text + name);
    }

    function operationClick(name){
        setText(text + name);
    } 
    


    function delElement(name){
        setText("");
    }

    function calculate(){
        //make sure to recorde the data in Number Text before doing the calculations when = is pressed
        try{
            //SECURITY: checking that all inputed characters to be evaluated are safe and from the GUI to prevent JS injection attack
            for(i in text){
                if(!( ALLOWEDINPUTS.includes(text[i]))){
                    setText("");
                    console.log(ALLOWEDINPUTS);
                    return;
                }
            }
            //Once the inputed checked safe we eval the string entered 
            let result = eval(text);

            //if valid mathematical operation alert result
            if(result === undefined){
                alert("Please enter a valid operation")
            } else {
                setText(result);
            }
        } 
        //in case error in the previous processes 
        catch {
            alert("Please enter a valid operation")
        }
        
    }


    return(
        <View style={{height:"65%", backgroundColor:theme.primary}}>
            <View style={{height: "20%", flexDirection:"row"}}>
                <CalculatorElement name="(" handleClick={numberClicked} theme={theme}/>
                <CalculatorElement name=")" handleClick={numberClicked} theme={theme}/>
                <CalculatorElement name="/" handleClick={numberClicked} theme={theme}/>
                <CalculatorElement name="." handleClick={operationClick} theme={theme}/>
            </View>
            <View style={{height: "20%", flexDirection:"row"}}>
                <CalculatorElement name="7" handleClick={numberClicked} theme={theme}/>
                <CalculatorElement name="8" handleClick={numberClicked} theme={theme}/>
                <CalculatorElement name="9" handleClick={numberClicked} theme={theme}/>
                <CalculatorElement name="*" handleClick={operationClick} theme={theme}/>
            </View>
            <View style={{height: "20%", flexDirection:"row"}}>
                <CalculatorElement name="4" handleClick={numberClicked} theme={theme}/>
                <CalculatorElement name="5" handleClick={numberClicked} theme={theme}/>
                <CalculatorElement name="6" handleClick={numberClicked} theme={theme}/>
                <CalculatorElement name="-" handleClick={operationClick} theme={theme}/>
            </View>
            <View style={{height: "20%", flexDirection:"row"}}>
                <CalculatorElement name="1" handleClick={numberClicked} theme={theme}/>
                <CalculatorElement name="2" handleClick={numberClicked} theme={theme}/>
                <CalculatorElement name="3" handleClick={numberClicked} theme={theme}/>
                <CalculatorElement name="+" handleClick={operationClick} theme={theme}/>
            </View>
            <View style={{height: "19.5%", flexDirection:"row"}}>
                <CalculatorElement name="C" handleClick={delElement} specialwidth="25%" theme={theme}/>
                <CalculatorElement name="0" handleClick={numberClicked} specialwidth="50%" theme={theme}/>
                <CalculatorEqual name="=" handleClick={calculate} specialwidth="25%" theme={theme}/>
            </View>
        </View>
        
    )
}

export default CalculatorBoard;