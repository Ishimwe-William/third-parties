import {TouchableOpacity, Text, View} from "react-native";

export const HomeScreen = ({navigation}) => {

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 24}}>Home</Text>
            <TouchableOpacity
                style={{fontSize: 20, borderWidth: 2, borderColor: 'blue', borderRadius: 4, padding: 10, margin: 20}}
                onPress={() => navigation.navigate('Signup')}>
                <Text>Sign Up Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{fontSize: 20, borderWidth: 2, borderColor: 'blue', borderRadius: 4, padding: 10, margin: 20}}
                onPress={() => navigation.openDrawer()}>
                <Text>Drawer</Text>
            </TouchableOpacity>
        </View>
    )
}