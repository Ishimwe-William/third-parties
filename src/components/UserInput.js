import React from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Feather from "react-native-vector-icons/Feather";

export const UserInput = (
    {
        name,
        label,
        value,
        setValue,
        autoComplete = 'off',
        autoCapitalize = 'none',
        keyboardType = 'default',
        isHidden,
        setIsHidden,
        error = "",
    }
) => {

    const successColor = "#5A9AA9";
    const errorColor = "#E52F2F";

    return (
        <View style={{marginHorizontal: 24}}>
            <Text style={{fontSize: 16, color: "#5A9AA9"}}>{label ? label : name}</Text>
            {error ? <Text style={{fontSize: 14, textAlign: "right", color: {errorColor}}}>{error}</Text> : null}
            <TextInput
                style={{
                    borderBottomWidth: 0.5,
                    height: 40,
                    borderBottomColor: error ? errorColor : successColor,
                    marginBottom: 30,
                }}
                value={value}
                onChangeText={(text) => setValue(text)}
                autoCapitalize={autoCapitalize}
                autoCorrect={false}
                autoComplete={autoComplete}
                keyboardType={keyboardType}
                secureTextEntry={isHidden}
            />

            {name.toLowerCase() === "password" && (
                <TouchableOpacity
                    onPress={() => setIsHidden(!isHidden)}
                    style={{
                        position: "absolute",
                        right: 0,
                        bottom: 50
                    }}
                >
                    <Feather name={isHidden ? "eye" : "eye-off"} size={24} color="#5A9AA9"/>
                </TouchableOpacity>
            )}
        </View>
    )
}
