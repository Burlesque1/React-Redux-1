122. testing user interaction <br>
use simulate() to test user interaction
check wrapper.state

123. test spies <br>
check whether gets called correctly and with correct params

124. addExpense test <br>
jest.fn() as fake func

125. editExpense test <br>
```
mapDispatchToProps = (dispatch) // not necessary to pass props
```
127. testing ExpenseListFilters <br>
get from store and render via connect as higher order component, data inside props
modify dispatch -> class based component -> mapDispatchToProps -> setup let and beforeEach