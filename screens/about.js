import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
} from 'react-native';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.onMoveButtonClick = this.onMoveButtonClick.bind(this);
  }

  onMoveButtonClick() {
    this.props.navigation.navigate('Quotation');
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
          Some Bla Bla about this application
        </Text>
        <View style={style.button}>
          <Button
            onPress={this.onMoveButtonClick}
            title="Move to quotations"
            color="#841584"
            accessibilityLabel="Move to quotations screen button"
          />
        </View>
      </View>
    );
  }
}


const style = StyleSheet.create({
  button: {
    marginTop: 20,
  },
});
