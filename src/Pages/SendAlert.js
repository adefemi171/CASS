import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';


const SCREEN_WIDTH = Dimensions.get("window").width;
export default class Alert extends React.Component {
    render() {
        return (
            <View style={styles.Container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                    <Svg height="80%" width="95%" viewBox="0 0 180 180" preserveAspectRatio="none">
                        <Circle
                            cx="90"
                            cy="100"
                            r="40"
                            stroke="yellow"
                            strokeWidth="5"
                            fill= "RGB(255, 255, 128)"
                        />
                        <Circle
                            cx = "90"
                            cy = "100"
                            r = "30"
                            stroke="white"
                            strokeWidth="2"
                            fill="white"
                        />
                    </Svg>
                </TouchableOpacity>
                <Text style={styles.displayText}>
                    Tap to send Alert!!
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
