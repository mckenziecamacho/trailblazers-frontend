import './App.css';
import Header from './components/Header'
import { Route, Routes, Router } from 'react-router-dom';
import Homepage from './components/Homepage'
import SearchBox from './components/SearchBox';
import About from './components/About'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <SearchBox />


      <Router>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path='/home' element={<Homepage />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      </Router>
      </header>
    </div>
  );
}
export default App;
