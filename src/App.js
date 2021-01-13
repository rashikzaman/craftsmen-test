import logo from './logo.svg';
import './App.css';
import {SearchProvider} from 'contexts/SearchContext'
import SearchInput from 'components/SearchInput';

function App() {
  return (
    <SearchProvider>
      <div className="App">
       <SearchInput />
      </div>
    </SearchProvider>
  );
}

export default App;
