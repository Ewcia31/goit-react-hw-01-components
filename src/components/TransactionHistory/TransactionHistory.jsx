import React from 'react';
import PropTypes from 'prop-types';
import './TransactionHistory.css';

function Transactions({ transactions }) {
  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Transactions;

Transactions.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
