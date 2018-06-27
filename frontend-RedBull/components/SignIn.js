import React from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { reduxForm, Field } from "redux-form";


function textInput(props) {
  const { input } = props;
  return (
  <View>
      <Input
        placeholder={input.name}
        onChangeText={input.onChange}
        value={input.value}
      />
  </View>
  );
}

function passwordInput(props) {
 const {input} = props;
 return (
   <View>
     <Input
       placeholder= {input.name}
       onChangeText={input.onChange}
       value={input.value}
       secureTextEntry={true}
       password={true}
     />
   </View>
 );
}

class SignIn extends React.Component {

  render() {
    return (
      <View>
        <Field
          name="email"
          component={textInput}
          type= "email"

        />
        <Field
          name="password"
          component={passwordInput}
          type= "password"
        />
        <Button
          onPress={this.props.handleSubmit}
          title="Connexion"
          textStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "#dd0741",
            width: 200,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
          containerStyle={{ marginTop: 20 }}
        />
      </View>
      )
  }
}

export default reduxForm({
  form: 'signIn-form'
})(SignIn)
