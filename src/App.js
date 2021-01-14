import Listview from './list.js'
import {Route,Switch} from 'react-router-dom';
import Window from './window.js';
import Card2 from './card2.js';

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={Window}/>
      <Route exact path='/list' component={Listview}/>
      <Route exact path='/card2' component={Card2}/>
    </Switch>
    </>
  );
}

export default App;
