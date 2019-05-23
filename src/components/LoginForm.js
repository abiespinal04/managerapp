import React, { Component } from 'react';
import {View,Text} from 'react-native';
import Card from './common/Card'
import CardSection from './common/CardSection';
import Spinner from './common/Spinner';
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

    renderErrorOrSuccess(){
        if(this.props.error){
            return(
                <View style={{backgroundColor:'white'}}>
                <Text style={styles.errorTextStyle}>
                {this.props.error}
                </Text>
                </View>
            )
        } else if(this.props.success){
            return(
                <View style={{backgroundColor:'white'}}>
                <Text style={styles.successTextStyle}>
                {this.props.success}
                </Text>
                </View>
            )
        }
   
    }
    renderButton(){

        if(!this.props.loading){
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
            Login
        </Button>
        )
        } else {
            
            return(<Spinner size="large" />)
        }
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
                   value={this.props.password}
                   />
               </CardSection>
                {this.renderErrorOrSuccess()}

               <CardSection>
                  {this.renderButton()}
               </CardSection>
            </Card>

         );
    }
}

const styles ={
    errorTextStyle: {
        fontSize:20,
        alignSelf:'center',
        color:'red'
    },
    successTextStyle: {
        fontSize:20,
        alignSelf:'center',
        color:'green'
    }
}
 
const mapStateToProps = state => {

    return {
        email : state.auth.email,
        password:state.auth.password,
        error:state.auth.error,
        success:state.auth.success,
        loading:state.auth.loading
    }
}

export default connect(mapStateToProps, {emailChanged,passwordChanged,loginUser,})(LoginForm);