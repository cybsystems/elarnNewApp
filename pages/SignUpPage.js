import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  BackHandler,
  StyleSheet,
} from 'react-native';
import {updateRawData} from '../redux/actions';
import {loginStyles} from './styles/loginStyles';
import {baseUrl} from '../utils';

export default class SignUpPage extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    cpassword: '',
    classId: '',
  };

  componentDidMount() {
    updateRawData({statusBarColor: '#01579B'});
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );
  }

  goBack = () => {
    updateRawData({statusBarColor: '#7e30b0'});
    this.props.navigation.pop();
  };
  handleBackPress = () => {
    this.goBack();
    return true;
  };

  componentWillUnmount() {
    this.backHandler.remove();
  }
  onSignUp = async () => {
    try {
      let formData = new FormData();
      formData.append('email', 'John@gmail.com');
      formData.append('username', 'John123');
      formData.append('password', 'Pass123');
      formData.append('classId', '123');

      const res = await fetch(`${baseUrl}/addStudentInvitation.php`, {
        body: formData,
        method: 'post',
      })
        .then(res => res.json())
        .then(res => res);
      console.log('====================================');
      console.log(res);
      console.log('====================================');
    } catch (e) {
      console.warn(e);
    }
  };

  render() {
    const styles = loginStyles;
    return (
      <View style={{...styles.container, backgroundColor: '#01579B'}}>
        <TextInput
          value={this.state.username}
          onChangeText={username => this.setState({username})}
          placeholder={'Email'}
          style={styles.input}
          placeholderTextColor="white"
        />

        <TextInput
          value={this.state.email}
          onChangeText={email => this.setState({email})}
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

        <TextInput
          value={this.state.cpassword}
          onChangeText={cpassword => this.setState({cpassword})}
          placeholder={'Confirm Password'}
          secureTextEntry={true}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          value={this.state.classId}
          onChangeText={classId => this.setState({classId})}
          placeholder={'Class Id'}
          style={styles.input}
          placeholderTextColor="white"
        />

        <TouchableOpacity
          onPress={this.onSignUp}
          style={{
            backgroundColor: '#00838F',
            width: '80%',
            alignItems: 'center',
            padding: 12,
            marginTop: 20,
          }}>
          <Text style={{color: 'white', fontSize: 16}}>
            Send Invitaion to your teacher
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.goBack} style={{marginTop: 20}}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
            }}>
            Go Back to Sign In
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
