import {View, TouchableOpacity, Text} from 'react-native'



const CalculatorEqual = ({name, specialwidth, handleClick, theme}) =>{
    let width = "25%"
    if(specialwidth){
        width = specialwidth;
    }
    return(
        <TouchableOpacity 
        style={{backgroundColor: theme.third, width:width, height:"100%", borderWidth:1, borderRadius:30}}
        onPress={() => {
            handleClick();
        }}
        >
            <Text style={{textAlign:"center", textAlignVertical:"center", height:"100%", fontFamily:"Ubuntu", fontSize:48, color:theme.white}}>{name}</Text>
        </TouchableOpacity>
    );
}

export default CalculatorEqual;