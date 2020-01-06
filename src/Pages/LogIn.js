import React, { Component } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
// import { Card } from "react-native-elements";
import { Link } from "react-router-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const hitSlop = { top: 24, right: 24, bottom: 24, left: 24 };

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matricno: "",
    };
  }

  _handleChange = name => value => {
    this.setState({
      [name]: value
    });
  };

  _renderLink = props => (
    <TouchableOpacity disabled={!this._canLogin} hitSlop={hitSlop} {...props} />
  );


  render() {
    const { matricno } = this.state;
    return (
      <SafeAreaView style={styles.root}>
          <View style={styles.brand}>
            <ImageBackground style={styles.logo} source={require("../../assets/images/wrapper.png")} resizeMode="cover">
              <View style={{position: 'absolute', top: SCREEN_WIDTH * 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.name}>CASS</Text>
              </View>
              <View style={{position: 'absolute', top: SCREEN_WIDTH * 0.65, left: 0, right: 0, bottom: 3, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.subname}>Campus Alarm Security System</Text>
              </View>
            </ImageBackground>
          </View>

        <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="Input ID Number"
          onChangeText={this._handleChange("matricno")}
          value={matricno}
        />
        <View style={styles.btnWrapper}>
          <Link to={this._to} component={this._renderLink}>
            <Text style={this._labelStyle} onPress={() => this.props.navigation.navigate('Profile')}>Register</Text>
          </Link>
        </View>
      </SafeAreaView>
    );
  }

  // _onPress = () => {
  //   this.props.navigation.navigate('Confirm');
  // }
  get _to() {
    return {
      pathname: "/Confirm",
      state: {
        user: this.state
      }
    };
  }

  get _canLogin() {
    const { matricno } = this.state;
    return Boolean(matricno);
  }

  get _labelStyle() {
    return {
      ...styles.btnLabel,
      color: this._canLogin ? "rgb(102, 37, 0)" : "#eeeeee"
    };
  }
}

export default Login;

const styles = StyleSheet.create({
  btnLabel: {
    fontSize: 25,
    color: "rgb(102, 37, 0)",
  },
  btnWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
    marginVertical: 8,
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "yellow",
    width: 200
  },
  brand: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32
  },
  input: {
    flexDirection: "row",
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 8,
    borderRadius: 8,
    borderColor: "#f9f9f9",
    borderWidth: 2,
    padding: 16,
    width: 343,
    elevation:4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    // alignItems: "center",
    // justifyContent: "center",
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  logo: {
    width: SCREEN_WIDTH * 1,
    height: SCREEN_WIDTH * 0.75,
    top: -400,
    position: "absolute",
    marginTop: SCREEN_WIDTH * 0.1
  },
  name: {
    fontSize: 30,
    fontWeight: "800",
    color: "yellow"

  },
  subname: {
    fontStyle: 'italic',
    fontSize: 25,
    fontWeight: "400",
    color: "white"

  },
  root: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center"
  }
});
