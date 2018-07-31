import QuotationsStore from './quotationStore';
import NavigationStore from './navigationStore';

export default class RootStore {
  constructor() {
    this.quotationStore = new QuotationsStore(this);
    this.navigationStore = new NavigationStore(this);
  }
};
