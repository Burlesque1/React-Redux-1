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

133. production webpack <br>
change webpack.config.js from obj to function <br>
change build command in package.json <br>
extract source map from bundle.js to reduce the size 

134. extract CSS files
??? <br>
difference from dev-server and live-server

135. a production web server with express <br>
```
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});
```

136. deploy to heroku

137. deploy to heroku 2 <br>
webpack-dev-server runs some virtual element not write into file
node server runs as the real server

138. fdsaf <br>
TDD write test at first despite it would fail <br>
then write code <br>

142. getting firebase
+ use realtime database
+ use authentication system

146. remove <br>
ref().set(null) <=> ref().remove()

147. update data <br>
'xxx/xxx' to access sub attribute

148. fetching data <br>
use once() or on() to fetch data
```
const onValueChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
}, (e) => {
  console.log('Error with data fetching', e);
});
database.ref().off(onValueChange);
```

152. Asynchronous Redux Actions <br>
component should not be aware of data flow and should be concerned with presentation of information and basic user interaction
+ component calls action generator
+ action generator returns object / function
+ component dispatches object /function
+ redux store changes / function runs(has the ability to dispatch other actions and do whatever it wants)
<br> use redux-thunk to provide middleware
<br> export default ???

153. test add expense 
<br> moment.format would change time zone result in inconsistency on travis
<br> import will automaticlly run the file

155. creating separate test databse
<br> webpack.config.js works for server side and should not be passed to client side so that need to manully pass process.env.FIREBASE_XXX using defined plugin

157. feching expenses
should not fetch data via component / create new 
```
// add ()
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});
```
startXXXExpense will get called internally by redux and it gets called with dispatch

165. the auth reducer
<br> implicit login and logout should also update redux store, dispatch login and logout outside startXXX 

167. public only routes
```
                authenticated           not
publicRoutes    redirect to '/'         display
privateRoutes   display                 redirect to '/'

// app.js
// not necessary to set '/' as public routes
// this would redirect to '/' when logged in
if(history.location.pathname === '/'){ 
  history.push('/dashboard');
}
```

168. private firebase data
<br> getState returns all the reducers
<br> publicRoutes help when addExpense
```
// this not work when somewhere else push('/')
if(history.location.pathname === '/'){ 
  history.push('/dashboard');
}
```

171. styling login page
<br> 100vh - 100% viewport height, cover
<br> rem
```
use <div>
      <div>
      </div>
    <div>
```