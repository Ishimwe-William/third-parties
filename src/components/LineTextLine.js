import {StyleSheet, View, Text} from "react-native";

export const LineTextLine = ({text}) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.line}/>
            <View>
                <Text style={{textAlign:"center", fontSize:14, color:'#5A9AA9'}}>{text}</Text>
            </View>
            <View style={styles.line}/>
        </View>
    )
}

const styles = StyleSheet.create({
    line:{
        flex: 1,
        height: 0.5,
        backgroundColor: '#5A9AA9',
        margin:20,
    }
})