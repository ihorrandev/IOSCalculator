import React from 'react';
import { 
    StyleSheet,
    Text,
    View
} from 'react-native';

const Style = StyleSheet.create({
    Display:{
        flex:1,
        padding:20,
        justifyContent:'center',
        backgroundColor: 'rgba(0,0,0,0.9)',
        alignItems:'flex-end',
    },
    DisplayValue:{
        fontSize:60,
        color:'#FFF',
    }
})

export default props => 
    <View style={Style.Display}>
        <Text style={Style.DisplayValue} numberOfLines={1}>{props.value}</Text>
    </View>
