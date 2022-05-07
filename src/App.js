import './App.css';
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom';
// import Homepage from './components/Homepage'
import SearchBox from './components/SearchBox';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <SearchBox/>


      {/* <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes> */}
      </header>
    </div>
  );
}

export default App;
