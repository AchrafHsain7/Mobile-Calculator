import {View, TouchableOpacity, Text} from 'react-native'



const CalculatorElement = ({name, specialwidth, handleClick, theme}) =>{
    let width = "25%"
    if(specialwidth){
        width = specialwidth;
    }
    return(
        <TouchableOpacity 
        style={{backgroundColor: theme.fourth, width:width, height:"100%", borderWidth:1, borderRadius:12}}
        onPress={() => {
            handleClick(name);
        }}
        >
            <Text style={{textAlign:"center", textAlignVertical:"center", fontFamily:"Ubuntu", height:"100%", color:theme.primary}}>{name}</Text>
        </TouchableOpacity>
    );
}

export default CalculatorElement;