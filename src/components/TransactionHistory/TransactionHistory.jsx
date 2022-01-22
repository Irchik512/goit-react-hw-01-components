import PropTypes from 'prop-types'
import { HistiryOFTransactions } from "./TransactionHistiry.styled";

export default function TransactionHistory({items}) {
  return(
    <HistiryOFTransactions>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
      {items.map(({id, type, amount, currency}) => {
        return(
          <tr key = {id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
        )
      })}
      </tbody>
    </HistiryOFTransactions>
  )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
})),
};
