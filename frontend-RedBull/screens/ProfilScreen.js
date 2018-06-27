import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import React from 'react';
import {Overlay, Button} from "react-native-elements";
import UserForm from '../components/UserForm';
import {connect} from 'react-redux';


export default class ProfilScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (

<View style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Image
                source={require('../assets/images/Logo_Red_Bull.svg.png')}
                style={{
                  width:'auto',
                  height: 160,
                  marginTop:125,
                  resizeMode: 'contain'

                }}
              />
            <Text h1 style={styles.title}>DRINK</Text>



      <Text h4 style={styles.text}>Commander vos Red Bull facilement 7j/7 24/24.
        Livraison rapide et gratuite.</Text>


  <UserForm isVisible={this.props.isVisible}/>

</View>

    );
  }
}

function mapStateToProps(state) {
  console.log(isVisible);
  return { isVisible: state.isVisible , userid: state.user._id}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373333',
  },

  title:{
    color:"white",
    fontSize:50,
    textAlign:'right',
    marginRight: 20
  },

  text:{
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: 'right',
    textAlign: 'center',
    marginTop: 150
   }
});
