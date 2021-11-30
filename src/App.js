import React,{Component} from 'react';
import MemeGenerator from './MemeGenerator.js';
import Header from './Header.js';
import "./App.css";


class App extends Component{
 
  render(){
    return(
      <div>
          <Header/>
          <MemeGenerator/>
      </div>
    )
  }
}
export default App;