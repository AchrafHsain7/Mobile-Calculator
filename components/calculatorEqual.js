import {View, TouchableOpacity, Text} from 'react-native'
import {COLORS} from '../constants';


const CalculatorEqual = ({name, specialwidth, handleClick}) =>{
    let width = "25%"
    if(specialwidth === "50%"){
        width = "50%";
    }
    return(
        <TouchableOpacity 
        style={{backgroundColor: COLORS.secondary, width:width, height:"100%", borderWidth:1, borderRadius:5}}
        onPress={() => {
            handleClick();
        }}
        >
            <Text style={{textAlign:"center", textAlignVertical:"center"}}>{name}</Text>
        </TouchableOpacity>
    );
}

export default CalculatorEqual;