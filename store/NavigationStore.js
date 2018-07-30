import {
  configure,
  action,
  observable,
  decorate,
  computed,
  runInAction
} from 'mobx';

configure({enforceActions: true});

export default class NavigationStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  activeNavigationScreenName = '';

  setActiveNavigationScreenName = (name) => {
    this.activeNavigationScreenName = name;
  };
}

decorate(NavigationStore, {
  activeNavigationScreenName: observable,
  setActiveNavigationScreenName: action
})

