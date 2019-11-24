import React, {Component} from 'react';
import {
  Alert,
  TouchableOpacity,
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import {updateRawData} from '../redux/actions';

export default class LoginPage extends Component {
  state = {username: '', password: ''};

  componentDidMount() {
    updateRawData({statusBarColor: '#7e30b0'});
  }

  onLogin = () => {};

  onSignUpClicked = () => {
    this.props.navigation.navigate('SignUp');
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={username => this.setState({username})}
          placeholder={'Username'}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'white', fontSize: 16}}> Login </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.onSignUpClicked}
          style={{
            backgroundColor: '#00838F',
            width: '80%',
            alignItems: 'center',
            padding: 12,
            marginTop: 20,
          }}>
          <Text style={{color: 'white', fontSize: 16}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#f64c73',
    padding: 12,
    color: 'white',
    width: '80%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#7e30b0',
  },
  input: {
    width: '80%',
    height: 60,
    paddingLeft: 10,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 20,
  },
});
