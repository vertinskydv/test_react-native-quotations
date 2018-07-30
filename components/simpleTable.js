import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import { observer } from 'mobx-react'


class SimpleTable extends Component {
  componentDidMount() {
    this.props.tableMount();
  }

  componentWillUnmount() {
    this.props.tableUnmount();
  }

  _renderHeaderRow = (headerConfig) => {
    return (
      <View style={styles.row}>
      {
        headerConfig.map((headerCellConfig) => (
          <View key={headerCellConfig.label} style={{flex: 1}}>
            <Text>{headerCellConfig.label}</Text>
          </View>
        ))
      }
      </View>
    );
  }

  _renderContentRow = (headerConfig, rowData) => {
    return (
      <View key={'row' + rowData.value.id} style={styles.row}>
        {headerConfig.map((headerCellConfig) => {
          if (!headerCellConfig.key) {
            return (
              <View key={'title' + rowData.value.id} style={styles.cell}>
                <Text>{rowData.key}</Text>
              </View>
            );
          }
          return (
            <View key={headerCellConfig.label + rowData.value.id} style={styles.cell}>
              <Text>{rowData.value[headerCellConfig.key]}</Text>
            </View>
          );
        })}
      </ View>
    );
  }

  // I tried to use the FlatList component from the react-native.
  // But I had to refuse him because of this problem https://github.com/facebook/react-native/issues/15990
  render() {
    console.log("Render!");
    const { tableData, headerConfig } = this.props;
  
    if (tableData.length) {
      return (
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
          {this._renderHeaderRow(headerConfig)}
          <ScrollView>
            {tableData.map((rowData) => {
              return this._renderContentRow(headerConfig, rowData)
            })}
          </ScrollView>
        </ View>
      );
    }
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    backgroundColor: 'white'
  },
  cell: {
    flex: 1
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default observer(SimpleTable);

