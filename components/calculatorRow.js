import {Text, View} from 'react-native'

import  CalculatorElement from "./calculatorElement";


const CalculatorRow = ()=>{
    return(
        <View style={{ flexDirection:"row", height:"100%"}}>
            <CalculatorElement name="+" />
            <CalculatorElement />
            <CalculatorElement />
            <CalculatorElement />
        </View>
    );
}

export default CalculatorRow;