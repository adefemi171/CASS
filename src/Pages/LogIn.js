import React, { Component } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import { Link } from "react-router-native";

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
          <Image style={styles.logo} source={require("../../assets/images/bot.png")} />
          <Text style={styles.name}>CASS</Text>
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
            <Text style={this._labelStyle} onPress={this._onPress}>Register</Text>
          </Link>
        </View>
      </SafeAreaView>
    );
  }

  _onPress = () => {
    Alert.alert("Welcome user " + this.state.matricno);
  }
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
      color: this._canLogin ? "rgb(255, 160, 44)" : "#eeeeee"
    };
  }
}

export default Login;

const styles = StyleSheet.create({
  btnLabel: {
    fontSize: 25,
    color: "rgb(255, 160, 44)",
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
  },
  logo: {
    width: 80,
    height: 112
  },
  name: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 16
  },
  root: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center"
  }
});
