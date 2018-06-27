import React from 'react';
import { Text, View } from 'react-native';
import { Overlay, Input, Button, Divider } from 'react-native-elements';
import {connect} from 'react-redux';
import SignIn from './SignIn';
import SignUp from './SignUp';

class UserForm extends React.Component {

   constructor() {
    super();
    this.submitSignIn = this.submitSignIn.bind(this);
    this.submitSignUp = this.submitSignUp.bind(this);
  }

  submitSignIn(values) {
    console.log(values)
    var ctx = this;
    fetch('http://10.2.1.32:3000/signin?email='+values.email+'&password='+values.password)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        if(data._id){
          ctx.props.onSigninClick(data);
        }
    });

  }
  submitSignUp(values) {
    console.log(values)
    var ctx = this;
    fetch('http://10.2.1.32:3000/signup?lastname='+values.lastName+'&firstname='+values.firstName+'&email='+values.email+'&password='+values.password+'&city='+values.city+'&adress='+values.adress)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        if(data._id){
          ctx.props.onSignupClick(data);
        }
    });
  }

  render() {
    return (<Overlay isVisible={this.props.isVisible}>
      <View style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>

        <SignIn onSubmit={this.submitSignIn}/>

        <SignUp onSubmit={this.submitSignUp}/>

      </View>

    </Overlay>);
  }
}

function mapStateToProps(state) {
  console.log(state.isVisible);
  return { isVisible: state.isVisible }
}


function mapDispatchToProps(dispatch) {
  return {
    onSigninClick: function(user) {
        dispatch( {type: 'hideModalSignin'} );
        dispatch( {type: 'userSignin', user } )
    },
    onSignupClick: function(user) {
        dispatch( {type: 'hideModalSignin'} );
        dispatch( {type: 'userSignup', user } )
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserForm);
