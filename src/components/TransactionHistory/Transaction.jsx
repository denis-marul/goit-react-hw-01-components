import PropTypes from 'prop-types';


export const Transaction = ({type, amount, currency}) => {
    return <tr><td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
</tr>
}

Transaction.protoTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}