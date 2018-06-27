import React, { Component } from 'react';
import {View,  Text } from 'react-native';
import {connect} from 'react-redux';

class CounterDisplay extends Component {
  render() {
    var quantity = 0;
    if(this.props.drinklist != undefined && this.props.position != undefined && this.props.drinklist[this.props.position] != undefined) {
      quantity = this.props.drinklist[this.props.position].quantity
    }

    return (
      <View>
        <Text style={{color: 'grey', fontSize: 15}}>Quantité: { quantity  }</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps");
  return { drinklist: state.following}
}

export default connect(
    mapStateToProps,
    null
)(CounterDisplay);
