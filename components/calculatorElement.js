import {View, TouchableOpacity, Text} from 'react-native'
import {COLORS} from '../constants';


const CalculatorElement = ({name, specialwidth, handleClick}) =>{
    let width = "25%"
    if(specialwidth === "50%"){
        width = "50%";
    }
    return(
        <TouchableOpacity 
        style={{backgroundColor: COLORS.secondary, width:width, height:"100%", borderWidth:1}}
        onPress={() => {
            handleClick(name);
        }}
        >
            <Text>{name}</Text>
        </TouchableOpacity>
    );
}

export default CalculatorElement;