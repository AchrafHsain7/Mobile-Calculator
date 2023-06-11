import  CalculatorElement from "./calculatorElement";

import {View} from 'react-native';
import {COLORS} from "../constants"
import { useState } from "react";



const CalculatorBoard = ({text, setText})=>{

    const [state, setState] = useState({
        numbers: [],
        operations: [],
    })


    function numberClicked(name){
        setText(text + name);
        if(parseInt(name) < 10){
            setState({
                numbers: state.numbers.concat(parseInt(name)),
                operations: state.operations
            })
        } else {
            setState({
                numbers: state.numbers,
                operations: state.operations.concat(name)
            })
        }
        console.log(name);
        console.log(state);
    }


    function delElement(text){
        setText("");
        setState({
            numbers: [],
            operations: []
        })
        console.log(state);
    }


    return(
        <View style={{height:"60%", backgroundColor:COLORS.strong}}>
            <View style={{height: "25%", flexDirection:"row"}}>
                <CalculatorElement name="7" handleClick={numberClicked}/>
                <CalculatorElement name="8" handleClick={numberClicked}/>
                <CalculatorElement name="9" handleClick={numberClicked}/>
                <CalculatorElement name="/" handleClick={numberClicked}/>
            </View>
            <View style={{height: "25%", flexDirection:"row"}}>
                <CalculatorElement name="4" handleClick={numberClicked}/>
                <CalculatorElement name="5" handleClick={numberClicked}/>
                <CalculatorElement name="6" handleClick={numberClicked}/>
                <CalculatorElement name="*" handleClick={numberClicked}/>
            </View>
            <View style={{height: "25%", flexDirection:"row"}}>
                <CalculatorElement name="1" handleClick={numberClicked}/>
                <CalculatorElement name="2" handleClick={numberClicked}/>
                <CalculatorElement name="3" handleClick={numberClicked}/>
                <CalculatorElement name="-" handleClick={numberClicked}/>
            </View>
            <View style={{height: "25%", flexDirection:"row"}}>
                <CalculatorElement name="C" handleClick={delElement}/>
                <CalculatorElement name="0" handleClick={numberClicked}/>
                <CalculatorElement name="=" handleClick={numberClicked}/>
                <CalculatorElement name="+" handleClick={numberClicked}/>
            </View>
        </View>
        
    )
}

export default CalculatorBoard;