import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 10,
    },
    form:{
        width: "100%",
        height: "auto",
        marginTop: 10,
        padding: 10,
    },
    formLabel:{
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20
    },
    formInput:{
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f2e8c4",
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    textButtonCalculator:{
        fontSize: 20,
        color: "#ffffff",

    },
    buttonCalculator:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor:"#3ec9a7",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },
    errorMessage:{
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    }
})

export default styles