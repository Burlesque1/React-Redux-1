import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal, email, hiddenAmount }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Hi, {email} </h1>
        <h5 className="page-header__title">Viewing <span>{expenseCount} </span> {expenseWord} totalling 
          <span>{formattedExpensesTotal}</span>, and <span>{hiddenAmount}</span> more expenses hidden
        </h5>
        <div className="page-header__actions">
          <Link className="button" to="/create"> Add Expense </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  const hiddenAmount = state.expenses.length - visibleExpenses.length;

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
    email: state.auth.email,
    hiddenAmount
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
