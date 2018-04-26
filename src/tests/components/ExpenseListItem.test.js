import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';
import moment from 'moment'

test('should render ExpenseListItem correctly', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  console.log(moment(0));
  expect(wrapper).toMatchSnapshot();
});
