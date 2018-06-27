import React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { reduxForm, Field } from "redux-form";


function textInput(props) {
  const { input } = props;
  return (
  <View>
        <Input
          placeholder= {input.name}
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


class SignUp extends React.Component {

  render() {
    return (

      <View>

        <Field
          name= "firstName"
          component={textInput}
          placeholder="Prénom"
        />
        <Field
          placeholder="Nom"
          name= "lastName"
          component={textInput}
        />
        <Field
          placeholder="Email"
          name= "email"
          component={textInput}
        />
        <Field
          placeholder="Mot de passe"
          name="password"
          component={passwordInput}
        />
        <Field
          placeholder="Ville"
          name="ville"
          component={textInput}
        />
        <Field
          placeholder="Adresse de Livraison"
          name="adresse"
          component={textInput}
        />

        <Button
          onPress={this.props.handleSubmit}
          title="Créer un compte"
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
  form: 'signUp-form'
})(SignUp)
