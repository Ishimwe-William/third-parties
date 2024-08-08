import {TouchableOpacity, Text} from "react-native";

export const SubmitButton = (
    {
        title,
        handleSubmit,
        loading,
    }) => {

    return (
        <TouchableOpacity
            onPress={!loading ? handleSubmit : null}
            style={{
                backgroundColor: '#5A9AA9',
                height: 50,
                marginBottom: 20,
                justifyContent: 'center',
                marginHorizontal: 15,
                borderRadius: 24,
            }}
        >
            <Text style={{
                fontWeight: "bold",
                fontSize: 16,
                textAlign: "center",
                color: "#fff"
            }}>{loading ? 'Please wait...' : title}</Text>

        </TouchableOpacity>
    )
}
