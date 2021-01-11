import logo from './logo.svg';
import Tableview from './table.js'
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={Tableview}/>
    </Switch>
    </>
  );
}

export default App;
