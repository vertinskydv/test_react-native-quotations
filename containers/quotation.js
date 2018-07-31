import { inject, observer } from 'mobx-react';
import Quotation from '../screens/quotation';

export default inject(store => ({
  tableData: store.quotationStore.quotationsData,
  tableMount: store.quotationStore.fetchQuotationEveryFiveSeconds,
  tableUnmount: store.quotationStore.destroyTimer,
  error: store.quotationStore.error,
}))(observer(Quotation));
