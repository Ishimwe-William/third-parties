import {View, Text} from "react-native";

export const ErrorPopupMessage = ({text}) => {

    return (
        <View style={{
            backgroundColor: 'red',
            padding: 10,
            position: 'absolute',
            top: 10,
            left: 0,
            right: 0,
            zIndex: 1,
            borderRadius: 5,
            marginHorizontal:20,
        }}>
            <Text style={{color:'white', textAlign:"center"}} >{text}</Text>
        </View>
    )
}