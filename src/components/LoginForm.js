import React, { Component } from 'react';
import {View,Text} from 'react-native';
import Card from './common/Card'
import CardSection from './common/CardSection';
import {connect} from 'react-redux'
import Input from './common/Input';
import Button from './common/Button';


class LoginForm extends Component {
    state = {  }
    render() { 
        return ( 

            <Card>
               <CardSection>
                   <Input
                   label="Email"
                   placeholder="email@gmail.com"
                   />
               </CardSection>
               
               <CardSection>
                   <Input
                   secureTextEntry
                   label="Password"
                   placeholder="password"
                   />
               </CardSection>
               <CardSection>
                  <Button>
                      Login
                  </Button>
               </CardSection>
            </Card>

         );
    }
}
 
const mapStateToProps = state => {

    return {
        email : state.auth.email
    }
}

export default connect(LoginForm);