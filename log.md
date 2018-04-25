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
get from store and render via connect as higher order component, data inside props <br>
modify dispatch -> class based component -> mapDispatchToProps -> setup let and beforeEach <br>
simulate vs .prop events are built-in
```
ExpenseForm
1. accesses states so cannot change data through setProps
2. change store data so wrapper.state has no data

ExpenseListFilter 
1. uses .props.filter so setProps works
2. change state data so wrapper.state.toBe works
```

128. production webpack <br>
change webpack.config.js from obj to function <br>
change build command in package.json 