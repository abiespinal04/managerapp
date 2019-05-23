import React, { Component } from 'react';
import {View,Text} from 'react-native';
import Card from './common/Card'
import CardSection from './common/CardSection';
import {connect} from 'react-redux'
import Input from './common/Input';
import Button from './common/Button';
import {emailChanged,passwordChanged,loginUser} from '../actions'



class LoginForm extends Component {
    state = {  }

    onEmailChanged(text){
        this.props.emailChanged(text);
    }

    onPasswordChanged(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const {email,password} = this.props
        this.props.loginUser({email,password});
    }

    render() { 
        return ( 

            <Card>
               <CardSection>
                   <Input
                   label="Email"
                   placeholder="email@gmail.com"
                   onChangeText={this.onEmailChanged.bind(this)}
                   value={this.props.email}
                   />
               </CardSection>
               
               <CardSection>
                   <Input
                   secureTextEntry
                   label="Password"
                   placeholder="password"
                   onChangeText={this.onPasswordChanged.bind(this)}
                   />
               </CardSection>
               <CardSection>
                  <Button onPress={this.onButtonPress.bind(this)}>
                      Login
                  </Button>
               </CardSection>
            </Card>

         );
    }
}
 
const mapStateToProps = state => {

    return {
        email : state.auth.email,
        password:state.auth.password
    }
}

export default connect(mapStateToProps, {emailChanged,passwordChanged,loginUser})(LoginForm);