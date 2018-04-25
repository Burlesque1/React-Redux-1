import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'text';
  // wrapper.find('input').prop('value')(text);
  wrapper.find('input').simulate('change', {
    target: { value }
  }); 
  expect(setTextFilter).toHaveBeenLastCalledWith(value); // check the most recent call
  console.log(wrapper.state('calendarFocused'));
  expect(wrapper.state('calendarFocused')).toBe(null);
});

test('should sort by date', () => {
  const value = 'date';
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', {
    target: { value }
  }); 
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value }
  }); 
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date change', () => {
  const startDate = moment(0), endDate = moment(0).add(8, 'year');
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
  // expect(wrapper.state('startDate')).toEqual(start);
  // expect(wrapper.state('endDate')).toEqual(end);
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  // expect(setState).toHaveBeenLastCalledWith(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});