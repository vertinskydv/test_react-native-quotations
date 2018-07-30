import QuotationsStore from './QuotationStore';
import NavigationStore from './NavigationStore';

export default class RootStore {
  constructor() {
    this.quotationStore = new QuotationsStore(this);
    this.navigationStore = new NavigationStore(this);
  }
}