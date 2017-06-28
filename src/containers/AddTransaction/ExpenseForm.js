import { connect } from 'react-redux'
import SimpleTransaction
  from '../../components/TransactionForm/SimpleTransaction'
import { getAccountsAsOptions } from '../../selectors/accounts'
import {
  getAccountId,
  getCurrencyOptions,
  getCurrency,
  getExpenseTagOptions
} from '../../selectors/ui/transactionForm'
import { EXPENSE } from '../../constants/transaction'
import { saveExpenseTransaction } from '../../actions/transactions'
import { loadExpenseTags } from '../../actions/tags'
import {
  changeAccount,
  changeAmount,
  changeCurrency,
  addExpenseTag,
  changeExpenseTags,
  changeDate,
  changeNote
} from '../../actions/ui/transactionForm'

const mapStateToProps = state => ({
  label: 'From',
  buttonLabel: 'Add Expense',
  accountId: getAccountId(state),
  accountOptions: getAccountsAsOptions(state),
  amount: state.ui.transactionForm.amount,
  currency: getCurrency(state),
  currencyOptions: getCurrencyOptions(state),
  tags: state.ui.transactionForm.tags[EXPENSE],
  tagsOptions: getExpenseTagOptions(state),
  date: state.ui.transactionForm.date,
  note: state.ui.transactionForm.note
})

export default connect(mapStateToProps, {
  changeAccount,
  changeAmount,
  changeCurrency,
  changeDate,
  changeNote,
  addTag: addExpenseTag,
  changeTags: changeExpenseTags,
  loadTagsOptions: loadExpenseTags,
  saveTransaction: saveExpenseTransaction
})(SimpleTransaction)