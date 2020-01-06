import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import UserCard from '../components/UserCard/UserCard';
import axios from '../config/axiosConfig';
import { useNavigation } from 'react-navigation-hooks';

export default function Profile() {

  const [username, setUsername] = useState("");
  const [user, setUser] = useState({
    image: "",
    name: "",
    bio: "",
    url: "",
    public_repos: "", 
    searched: false,
    error: false,
    mesasge: ""
  });
  const [error, setError] = useState({ error: false, message: "" });

  const handleChange = name => {
    setUsername(name);
    setUser({})
    setError({
      error: false,
      mesasge: ""
    });
  };
  const { navigate } = useNavigation();
  // const _onPress = () => {
  //   this.props.navigation.navigate('SendAlert');
  // };
  const handleFetch = async () => {
    try {
      const res = await axios.get(`/users/${username}`);
      return setUser({
        image: res.data.avatar_url,
        name: res.data.name,
        bio: res.data.bio,
        url: res.data.html_url,
        public_repos: res.data.public_repos,
        searched: true
      });
    } catch (error) {
      return setError({
        error: true,
        message: <Text style={{alignSelf: 'center', color: 'red'}}>user {username} does not exist</Text>
      });
    }
  };

  const clearError = () => {
    setError({
      error: false,
      mesasge: ""
    });
    setUser({
      image: "",
      name: "",
      bio: "",
      url: "",
      public_repos: "",
      searched: false
    });
  };

  return (
    <ScrollView>
    <View style={styles.container}>
    <View>
      <View>
        <Image
         source={require('../../assets/github.jpg')}
         style={{width: 100, height: 100, alignSelf: 'center', marginTop: 50}}
        />
      </View>
      <View style={styles.appSection}>
        <Text>Search Git User</Text>
      </View>
      <TextInput
        placeholder='Enter User Name'
        style={{alignSelf: 'center', marginTop: 30, fontSize: 16}}
        onChangeText={(name) => handleChange(name)}
        value={username}
        onFocus={() => clearError()}
      />
      <TouchableHighlight
        underlayColor='white' onPress={handleFetch}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>search user</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor='white' onPress={() => {navigate('SendAlert')}}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>NEXT</Text>
        </View>
      </TouchableHighlight>
      </View>
      {
        error.error ? (
          <View style={{marginVertical: 10}}>{error.message}</View>
        ) 
        :(
          user.searched && (
            <UserCard
              name={user.name}
              image={user.image}
              bio={user.bio}
              count={user.public_repos}
              url={user.url}
            />
          )
        )
      }
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appSection: {
    alignSelf: 'center',
  },
  btn: {
    marginVertical: 30,
    width: 130,
    alignSelf: 'center',
    backgroundColor: 'darkblue',
    borderRadius: 5
  },
  btnText: {
    color: 'white',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center'
  }
});
