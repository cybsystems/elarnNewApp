import React, {Component} from 'react';
import {
  Alert,
  TouchableOpacity,
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  BackHandler,
} from 'react-native';
import {updateRawData} from '../redux/actions';
import {loginStyles} from './styles/loginStyles';
import {removeData} from '../storage';

export default class LoginPage extends Component {
  state = {username: '', password: ''};

  componentDidMount() {
    updateRawData({statusBarColor: '#7e30b0'});
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );
  }
  handleBackPress = () => {
    BackHandler.exitApp();
    return true;
  };

  onLogin = async () => {
    await removeData('@INTRO_SHOWN');
  };

  onSignUpClicked = () => {
    this.props.navigation.navigate('SignUp');
  };
  render() {
    const styles = loginStyles;
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
        <TouchableOpacity onPress={this.onLogin} style={styles.button}>
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
