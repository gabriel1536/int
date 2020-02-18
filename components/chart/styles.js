import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
    tooltip: {
        position: 'relative',
        backgroundColor: Colors.barColorToggled,
        left: -28,
        width: "100%",
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5,
        textAlign: 'center',
        color: Colors.fontColor,
        fontSize: 14
    }
});