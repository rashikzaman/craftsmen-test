import logo from './logo.svg';
import './App.css';
import { SearchProvider } from 'contexts/SearchContext'
import SearchInput from 'components/SearchInput';
import SearchResult from 'components/SearchResult';
import Details from 'components/Details';


function App() {
  return (
    <SearchProvider>
      <div className="app">
        <SearchInput />
        <SearchResult />
        <Details />
      </div>
    </SearchProvider>
  );
}

export default App;
