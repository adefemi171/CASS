import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';




const SCREEN_WIDTH = Dimensions.get("window").width;
export default class ProgressBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            indeterminate: true,
        };
    }

    componentDidMount() {
        this.animate();
    }

    animate(){
        let progress = 0;
        this.setState({ progress });
        setTimeout(() => {
            this.setState({ indeterminate: false});
            setInterval(() => {
                progress += Math.random() / 5;
                if (progress > 1){
                    progress = 1;
                    this.props.navigation.navigate('Profile');
                }
                this.setState({ progress });
            }, 500);
        }, 1500);
    }

    render() {
        return(
            <View style={[styles.container]}>
                <Progress.Bar
                    width={SCREEN_WIDTH * 1}
                    height={20}
                    borderRadius={5}
                    borderWidth={2}
                    color="#ede04f"
                    style={styles.progress}
                    progress={this.state.progress}
                    indeterminate={this.state.indeterminate}
                />
                <Text style={styles.textVal}>{this.state.progress < 1 ? "Validating....." : "Validation Complete...."}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    progress: {
        margin: 10,
        backgroundColor: 'white',
        borderColor: '#ede04f'
        // flexDirection: "row",
        // height: 20,
        // width: '100%',
        // backgroundColor: 'white',
        // borderColor: '#ede04f',
        // borderWidth: 2,
        // borderRadius: 5
    },
    textVal: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        marginTop: 0,
        width: 200,
        textAlignVertical: "center"
    }
})