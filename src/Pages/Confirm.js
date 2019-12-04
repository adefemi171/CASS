import React, {useRef, useState, useEffect} from 'react';
import {Text, View, StyleSheet, Animated } from 'react-native';
import Constants from 'expo-constants';

function useInterval(callback, delay) {
    const savedCallback = useRef();

    //Remember the latest callback
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const Confirm = () => {
    let animation = useRef(new Animated.Value(0));
    const [progress, setProgress] = useState(0);
    useInterval(() => {
        if (progress < 100) {
            setProgress(progress + 5);
        }
            // console.log("Validating Matric number....")
        // } else if (progress === 100){
        //     console.log("Validation Complete....")
        // }
    }, 1000);

    useEffect(() => {
        Animated.timing(animation.current, {
            toValue: progress,
            duration: 100
        }).start();
    }, [progress]);

    const width = animation.current.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"],
        extrapolate: "clamp"
    });

    return (
        <View style={styles.container}>
            <View style={styles.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill], {backgroundColor: "#ede04f", width}}/>
            </View>
            <Text>
                Validation Complete.....
            </Text>
        </View>
    )
}

export default Confirm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    progressBar: {
        flexDirection: "row",
        height: 20,
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#ede04f',
        borderWidth: 2,
        borderRadius: 5
    }
});