import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SimpleTable from '../components/simpleTable';
import ErrorBoundary from '../errorHandlers/ErrorBoundary';

const headerConfig = [
  {
    label: 'Coin'
  },
  {
    label: 'Last',
    key: 'last'
  },
  {
    label: 'Highest Bid',
    key: 'highestBid'
  },
  {
    label: 'Percent Change',
    key: 'percentChange'
  }
];
    
export default class Quotation extends Component {

  render() {
    debugger;
    const {tableData, tableMount, tableUnmount} = this.props;
    return (
      <ErrorBoundary>
        <View style={style.quotation}>
          {this.props.error.message && <View style={style.error}><Text>{this.props.error.message}. Check console.</Text></View>}
          <SimpleTable
            headerConfig={headerConfig}
            tableData={tableData}
            tableMount={tableMount}
            tableUnmount={tableUnmount}
          />
        </View>
      </ErrorBoundary>
    );
  }
}

const style = StyleSheet.create({
  quotation: {
    flex: 1,
    justifyContent: 'center'
  },
  error: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  }
})
