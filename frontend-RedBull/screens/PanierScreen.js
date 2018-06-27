import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Modal
} from 'react-native';
import { Header, Button, ListItem, Avatar} from 'react-native-elements';
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout';
import CounterButton from '../components/CounterButton';
import CounterDisplay from '../components/CounterDisplay';

class PanierScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
var ctx  = this;
var followings = this.props.followings.map((following, i) => {

  return (

      <Swipeout right={ [
              {
              text: 'Supprimer',
              backgroundColor: 'red',
              onPress: function(){ ctx.props.clickDelete(i) }
              }
                ]} style={{marginTop: 45}} autoClose={true}
                    key= {i}
                    >
                <ListItem
                    hideChevron
                    key={i}
                    leftAvatar={<Avatar
                            size="xlarge"
                            source={following.img}
                                />}
                    title={following.name}
                    titleStyle= {{color: '#373333', fontFamily:'American Typewriter', fontSize: 14, marginBottom: 40}}
                    subtitle={
                <View>
                  <View style={{flexDirection: 'row'}}>
                      <CounterDisplay position={i}/>
                      <CounterButton position={i}/>
                  </View>
                    <Text style={styles.ratingPrice}>Prix:  {following.price}</Text>
                </View>
                }
            />
      </Swipeout>
)

})

return (

<View>

      <Header
          leftComponent={{icon: 'local-drink', color: '#dd0741'}}
          centerComponent={{text: 'PANIER', style: { color: '#dd0741', fontSize:25, marginLeft: 60}}}
          backgroundColor='#FFD900'
          rightComponent={<Button
                              title='PAIEMENT'
                              buttonStyle={{backgroundColor: "#373333"}}
                          />}
      />

    <View style={{flexDirection: 'row',borderColor:'#373333', borderWidth:1, marginLeft:15, marginTop:30, marginRight:15, backgroundColor:'#ffffff'}}>
          <Text style={{marginLeft: 'auto', marginLeft:20, marginTop:20, marginBottom:20}}>Total:</Text>
          <Text style={{marginLeft: 'auto', marginRight:20, marginTop:20, marginBottom:20}}>16€</Text>
    </View>


    <ScrollView style={{marginBottom: 180}}>
      {followings}
    </ScrollView>


</View>

    );
  }
}

const styles = StyleSheet.create({
  ratingPrice: {
    color: 'grey',
    fontSize: 15,
    marginTop: 23
  }
});

function mapStateToProps(state) {
  console.log(state);
  return { followings: state.following }
}

function mapDispatchToProps(dispatch) {
  return {
    clickDelete: function(position) {
      dispatch({ type: 'delete', position})
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PanierScreen);
