import {TouchableOpacity, StyleSheet, Text} from "react-native";

export const TermsPolicyLink = ({title, onClick}) => {
    return (
        <TouchableOpacity style={styles.text} onPress={onClick}>
            <Text style={{textAlign:"center", color:'#5A9AA9'}} >{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        marginVertical:10,
    }
})