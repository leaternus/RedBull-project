import React, { Component } from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import{Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class CounterButton extends Component {
  render() {
    return (
    <View style={{flexDirection: 'row', paddingLeft: 60}}>
        <Icon
          onPress={()=> this.props.onIncreaseClick(this.props.position) }
          name='plus-circle'
          type='font-awesome'
          color= '#dd0741'
          size= '27'
        />
      <Icon
          onPress={()=> this.props.onDecreaseClick(this.props.position) }
          name='minus-circle'
          type='font-awesome'
          color='#dd0741'
          size= '27'
        />
  </View>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: function(position) {
        dispatch( {type: 'increase', position} )
    },
    onDecreaseClick: function(position) {
      dispatch( {type: 'decrease', position} )
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
)(CounterButton);
