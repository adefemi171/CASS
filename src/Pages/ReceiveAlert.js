import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';


const SCREEN_WIDTH = Dimensions.get("window").width;
export default class Alert extends React.Component {
    render() {
        return (
            <View style={styles.Container}>
                <Svg height="80%" width="95%" viewBox="0 0 180 180" preserveAspectRatio="none">
                    <Circle
                        cx="90"
                        cy="100"
                        r="40"
                        stroke="pink"
                        strokeWidth="1"
                        fill= "RGB(171, 171, 171)"
                    />
                    <Circle
                        cx = "90"
                        cy = "100"
                        r = "30"
                        stroke="red"
                        strokeWidth="2"
                        fill="red"
                    />
                </Svg>
                <Text style={styles.displayText}>
                    Alert Sent
                </Text>
            </View>
        );
    }
}

// Trying to Centralize text to
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    // SvgStyle: {
    //     height: "50%",
    //     width: "50%",
    //     viewBox: "0 0 100 100"
    // }
    displayText: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        marginTop: 0,
        width: 200,
        textAlignVertical: "center"

    }
})
