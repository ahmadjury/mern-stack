import './App.css';
import {Router} from '@reach/router';
import Show from './component/Show';
import Search from './component/Search';

function App() {


  return (
    <div className="App">
    <Search></Search>
      <Router>
        <Show path="/:category/:id"></Show>
      </Router>
    </div>
  );
}

export default App;