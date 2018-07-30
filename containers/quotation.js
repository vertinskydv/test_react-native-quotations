import Quotation from '../screens/quotation';
import { inject, observer } from 'mobx-react'

export default inject(((store) => {
  return {
    tableData: store.quotationStore.quotationsData,
    tableMount: store.quotationStore.fetchQuotationEveryFiveSeconds,
    tableUnmount: store.quotationStore.destroyTimer,
    error: store.quotationStore.error
  }
}))(observer(Quotation));