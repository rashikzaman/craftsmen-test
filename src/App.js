import logo from './logo.svg';
import './App.css';
import { SearchProvider } from 'contexts/SearchContext'
import SearchInput from 'components/SearchInput';
import SearchResult from 'components/SearchResult';

function App() {
  return (
    <SearchProvider>
      <div className="app">
        <SearchInput />
        <SearchResult />
      </div>
    </SearchProvider>
  );
}

export default App;
