import logo from './logo.svg';
import './App.css';
import PersonCard from './PersonalCards';

function App() {
  return (
    <div className="App">
           <PersonCard firstName="jane" lastName="Doe" age={45} hairColor="black" />
      <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
      <PersonCard firstName="Millard" lastName="Filmore" age={50} hairColor="Brown" />
      <PersonCard firstName="Maria" lastName="smith" age={62} hairColor="Brown" />  
    </div>
  );
}

export default App;
