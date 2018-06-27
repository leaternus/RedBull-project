import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Text
} from 'react-native';
import { Header, Card, ListItem, Button, Icon} from 'react-native-elements';
import { connect } from 'react-redux';


 class ShoppingScreen extends React.Component {

  constructor(props) {
    super(props);
  this.state = {  can: [  {name: "Red Bull ENERGY DRINK", img: require('../assets/images/EnergyDrink.jpg'), price:"2€", quantity: 1},
                            {name: "Red Bull SUGARFREE", img:require('../assets/images/SugarFree.jpeg'), price:"2€", quantity: 1},
                            {name: "Red Bull ZERO CALORIES", img:require('../assets/images/ZeroCalories.jpg'), price:"2€", quantity: 1},
                            {name: "Red Bull BLUE EDITION", img:require('../assets/images/BlueEdition.jpeg'), price:"2€", quantity: 1},
                            {name: "Red Bull GREEN EDITION", img:require('../assets/images/GreenEdition.jpeg'), price:"2€", quantity: 1},
                            {name: "Red Bull RED EDITION", img:require('../assets/images/redEdition.jpeg'), price:"2€", quantity: 1},
                            {name: "Red Bull TROPICAL EDITION", img:require('../assets/images/TropicalEdition.jpg'), price:"2€", quantity: 1},
                            {name: "Red Bull SUMMER EDITION", img:require('../assets/images/SummerEdition.jpeg'), price:"2€", quantity: 1},
                            {name: "Organics SIMPLY COLA", img:require('../assets/images/SimplyCola.jpeg'), price:"2€", quantity: 1},
                            {name: "Organics BITTER LIMON", img:require('../assets/images/BitterLemon.jpeg'), price:"2€", quantity: 1},
                            {name: "Organics TONIC WATER", img:require('../assets/images/TonicWater.jpeg'), price:"2€", quantity: 1},
                            {name: "Organics GINGER ALE", img:require('../assets/images/GingerAle.jpeg'), price:"2€", quantity: 1},
                          ]
    }
  }

  static navigationOptions = {
    header: null,
  };

render() {

  var can = this.state.can.map((cans, i) => {
    return (<Card
                      containerStyle= {{borderColor: '#373333'}}
                      fontFamily='American Typewriter'
                      key={i}
                      title={cans.name}
                      imageStyle= {{width: 180,height:180, marginLeft: 80}}
                      image={cans.img}>
                  <Text style={{marginBottom: 10, textAlign: 'right', fontSize:17, color:'#dd0741' }}>
                      {cans.price}
                  </Text>

                  <Button
                        onPress={() => this.props.clickFollow(cans.name, cans.img, cans.price, cans.quantity)}
                        fontFamily='Lato'
                        buttonStyle={{ marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#dd0741',}}
                        title='Ajouter au panier' />
          </Card>

    )
});

        return (

            <View>

                  <Header
                       leftComponent={{ icon: 'local-drink', color: '#dd0741' }}
                       centerComponent={{ text: 'SHOPPING', style: { color: '#dd0741', fontSize:25 } }}
                       backgroundColor='#FFD900'
                  />

                  <ScrollView style={{marginBottom: 90}}>
                      {can}
                  </ScrollView>

          </View>

  );
}
}

function mapDispatchToProps(dispatch) {
  return {
    clickFollow: function(name, img, price, quantity) {
      dispatch({ type: 'follow', name: name, img: img, price: price, quantity: quantity})
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ShoppingScreen);
