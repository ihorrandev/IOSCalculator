import React from 'react';
import {
    StyleSheet,
    Text,
    Dimensions, 
    TouchableHighlight
} from 'react-native';

const Style = StyleSheet.create({
    Button:{
        fontSize:40,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding:20,
        backgroundColor:'#f0f0f0',
        textAlign:'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton:{
        color:'#FFF',
        backgroundColor:"#f69906",
    },
    buttonDouble:{
        width:(Dimensions.get('window').width/4) *2,
    },
    buttonTriple:{
        width:(Dimensions.get('window').width/4) *3,
    }
})

export default props => {

    const stylesButton = [Style.Button]

    if(props.double) stylesButton.push(Style.buttonDouble)
    if(props.triple) stylesButton.push(Style.buttonTriple)
    if(props.operation) stylesButton.push(Style.operationButton)
    
    return(
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}