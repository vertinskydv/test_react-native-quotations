import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { observer, PropTypes as MobxPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    backgroundColor: 'white',
  },
  cell: {
    flex: 1,
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});


class SimpleTable extends Component {
  constructor(props) {
    super(props);
    this.renderHeaderRow = this.renderHeaderRow.bind(this);
    this.renderContentRow = this.renderContentRow.bind(this);
  }

  componentDidMount() {
    this.props.tableMount();
  }

  componentWillUnmount() {
    this.props.tableUnmount();
  }

  renderHeaderRow() {
    const { headerConfig } = this.props;
    return (
      <View style={styles.row}>
        {
          headerConfig.map(headerCellConfig => (
            <View key={headerCellConfig.label} style={{ flex: 1 }}>
              <Text>
                {headerCellConfig.label}
              </Text>
            </View>
          ))
        }
      </View>
    );
  }

  renderContentRow(rowData) {
    const { headerConfig } = this.props;
    return (
      <View key={`row-${rowData.value.id}`} style={styles.row}>
        {headerConfig.map((headerCellConfig) => {
          if (!headerCellConfig.key) {
            return (
              <View key={`title-${rowData.value.id}`} style={styles.cell}>
                <Text>
                  {rowData.key.substring(4)}
                </Text>
              </View>
            );
          }
          return (
            <View key={headerCellConfig.label + rowData.value.id} style={styles.cell}>
              <Text>
                {rowData.value[headerCellConfig.key]}
              </Text>
            </View>
          );
        })}
      </View>
    );
  }

  // I tried to use the FlatList component from the react-native.
  // But I had to refuse him because of this problem https://github.com/facebook/react-native/issues/15990
  render() {
    const { tableData } = this.props;

    if (tableData.length) {
      return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
          {this.renderHeaderRow()}
          <ScrollView>
            {tableData.map(rowData => (this.renderContentRow(rowData)))}
          </ScrollView>
        </View>
      );
    }
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}

SimpleTable.propTypes = {
  tableData: MobxPropTypes.observableArrayOf(MobxPropTypes.observableObject),
  headerConfig: PropTypes.array
}

export default observer(SimpleTable);

