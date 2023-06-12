import  CalculatorElement from "./calculatorElement";
import CalculatorEqual from "./calculatorEqual";

import {View} from 'react-native';
import {COLORS} from "../constants"
import { useEffect, useState } from "react";



const CalculatorBoard = ({text, setText})=>{

    const [state, setState] = useState({
        numbers: [],
        operations: [],
    })



    function numberClicked(name){
        setText({
            displayText: text.displayText + name,
            numberText: text.numberText + name
        });
    }

    function operationClick(name){
        if(text.numberText !== ""){
            setState({
                numbers: state.numbers.concat(parseInt(text.numberText)),
                operations: state.operations.concat(name)
            });
        } else {
            setState({
                numbers: state.numbers,
                operations: state.operations.concat(name)
            });
        }
        setText({
            displayText: text.displayText + name,
            numberText: ""
        });
    } 
    


    function delElement(name){
        setText({
            displayText: "",
            numberText: ""
        });

        setState({
            numbers: [],
            operations: []
        })
        console.log("Delete Pressed")
        console.log(state)
        console.log(text)
    }

    function calculate(){
        //make sure to recorde the data in Number Text before doing the calculations when = is pressed
        if(text.numberText !== ""){
            setState(currentState => ({
                numbers: state.numbers.concat(parseInt(text.numberText)),
                operations: state.operations
            }));
            setText(currentState => ({
            displayText: text.displayText,
            numberText: ""
            }));

        console.log("Added stored value");
        } else {
            alert("what");
        }
        console.log("Equal Pressed")
        console.log(state)
        console.log(text)
        
        try{
            let result = eval(text.displayText);
            alert(result)
        } catch {
            alert("Error happened")
        }
        
    }


    return(
        <View style={{height:"60%", backgroundColor:COLORS.strong}}>
            <View style={{height: "25%", flexDirection:"row"}}>
                <CalculatorElement name="7" handleClick={numberClicked}/>
                <CalculatorElement name="8" handleClick={numberClicked}/>
                <CalculatorElement name="9" handleClick={numberClicked}/>
                <CalculatorElement name="/" handleClick={operationClick}/>
            </View>
            <View style={{height: "25%", flexDirection:"row"}}>
                <CalculatorElement name="4" handleClick={numberClicked}/>
                <CalculatorElement name="5" handleClick={numberClicked}/>
                <CalculatorElement name="6" handleClick={numberClicked}/>
                <CalculatorElement name="*" handleClick={operationClick}/>
            </View>
            <View style={{height: "25%", flexDirection:"row"}}>
                <CalculatorElement name="1" handleClick={numberClicked}/>
                <CalculatorElement name="2" handleClick={numberClicked}/>
                <CalculatorElement name="3" handleClick={numberClicked}/>
                <CalculatorElement name="-" handleClick={operationClick}/>
            </View>
            <View style={{height: "25%", flexDirection:"row"}}>
                <CalculatorElement name="C" handleClick={delElement}/>
                <CalculatorElement name="0" handleClick={numberClicked}/>
                <CalculatorEqual name="=" handleClick={calculate}/>
                <CalculatorElement name="+" handleClick={operationClick}/>
            </View>
        </View>
        
    )
}

export default CalculatorBoard;