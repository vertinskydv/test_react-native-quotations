import React from 'react';
import { Provider } from 'mobx-react';
import { View } from 'react-native';
import TabNavigation from './navigation/tabNavigation';
import RootStore from './store/rootStore';

const rootStore = new RootStore();

class App extends React.Component {
  render() {
    return (
      <Provider {...rootStore}>
        <View style={{ flex: 1 }}>
          <TabNavigation
            onNavigationStateChange={(oldState, { routes, index }) => {
              rootStore.navigationStore.setActiveNavigationScreenName(routes[index].key);
            }}
            ref={nav => { this.navigator = nav; }}
          />
        </View>
      </Provider>
    );
  }
}

export default App;
