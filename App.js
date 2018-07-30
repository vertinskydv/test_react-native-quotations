import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from './navigation/tabNavigation';
import { Provider } from 'mobx-react';
import { NavigationEvents } from 'react-navigation';
import RootStore from './store/RootStore';


const rootStore = new RootStore();


class App extends React.Component {

  // componentDidMount() {
  //   const routes = this.navigator.state.nav.routes;
  //   const index = this.navigator.state.nav.index;

  //   rootStore.navigationStore.setActiveNavigationScreenName(routes[index].key);
  // }
  render() {
    return (
      <Provider {...rootStore}>
        <View style={{flex: 1}}>
          <TabNavigation
            onNavigationStateChange={(oldState, {routes, index}) => {rootStore.navigationStore.setActiveNavigationScreenName(routes[index].key)}}
            ref={nav => { this.navigator = nav; }}
          />
        </View>
      </Provider>
    );
  }
}

export default App;