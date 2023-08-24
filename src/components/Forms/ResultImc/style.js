import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc:{
        flex: 1,
        marginTop: 0,
        paddingTop: 10,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
        
    },
    numberImc:{
        fontSize: 48,
        color: "#3ec9a7",
        fontWeight: "bold",
    },
    information:{
        fontSize: 18,
        color: "#3ec9a7",
        fontWeight: "bold"
    },
    boxSharedbutton:{
        width: "100%",
        alignItems: "center",
        marginBottom: 10,    
    },
    shared:{
        backgroundColor: "grey",
        borderRadius: 50,
        paddingBottom: 5,
        paddingTop: 5,
    },
    sharedText:{
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 30,
        
    }
    

})

export default styles;