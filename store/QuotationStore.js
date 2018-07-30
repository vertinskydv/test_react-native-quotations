import {
  autorun,
  configure,
  action,
  observable,
  decorate,
  computed,
  runInAction
} from 'mobx';
import { debounce } from 'underscore';
import { formatResponseToArray } from '../helpers/convert';

configure({enforceActions: true});

export default class QuotationsStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  quotationsData = [];
  error = {};
  fetchTimer = null;

  fetchQuotations = async () => {
    try {
      const response = await fetch('https://poloniex.com/public?command=returnTicker');
      if (response.status !== 200) {
        throw Error('Data fetch status error');
      }
      const data = await response.json();
      runInAction(() => {
        this.quotationsData = formatResponseToArray(data);
      });
    }
    catch (err) {
      this.setError(err);
    }
  }

  fetchQuotationEveryFiveSeconds = () => {
    const activeScreenName = this.rootStore.navigationStore.activeNavigationScreenName;
    if (!activeScreenName || activeScreenName === "Quotation") {
      this.fetchQuotations();
    }
    this.fetchTimer = setTimeout(this.fetchQuotationEveryFiveSeconds, 5000);
  }

  destroyTimer = () => {
    clearTimeout(this.fetchTimer);
  }

  setError = (err) => {
    this.error = err;
    debounce(this.clearError, 5000)();
  }

  clearError = () => {
    this.error = {};
  }
}

decorate(QuotationsStore, {
  quotationsData: observable,
  error: observable,
  fetchQuotations: action,
  setError: action,
  clearError: action
})
