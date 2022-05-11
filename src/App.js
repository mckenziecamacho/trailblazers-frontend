import './App.css';
import Header from './components/Header'
import { Route, Routes, Router } from 'react-router-dom';
import Homepage from './components/Homepage'
import SearchBox from './components/SearchBox';
import About from './components/About'
import React, {Component} from 'react';
import TrailDetails from './components/TrailDetails';


class App extends Component {
  constructor(props){
  super(props);
    this.state = {
        loading: true,
        items: [],
    }
}

  async componentDidMount(){
    //method allows us to execute the react code when the component is already placed in the dom
    const url = 'https://take-a-hike-ct.herokuapp.com/api/trail';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({items: data})
    console.log(data)
  }
  
  render(){
  return (
      <div className="App">
        <header className="App-header">
        <Header />
        <SearchBox/>
          
        <Routes>
          <Route path="/" element={<Homepage data={this.state.items}/>}/>
          <Route path='/home' element={<Homepage data={this.state.items}/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/trail-details/:_id' element={<TrailDetails data={this.state.items}/>}/>
          <Route path='/search' element={<SearchBox data={this.state.items}/>}/>
        </Routes>
        </header>
      </div>
    )
  }
}
export default App;
