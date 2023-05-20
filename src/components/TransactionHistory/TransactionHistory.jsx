import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
    return <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
        {items.map(item => (
          <Transaction
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}
          />
        ))}
   
  
  </tbody>
</table>
}

TransactionHistory.protoTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
    })),    
}


