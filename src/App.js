import React from 'react';
import './App.css';
import Profil from './Components/Profil';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      show : false
    }
  }
  render(){
    return(
      <div>
        <h1 className={this.state.show ? 'rahma' : 'mohamed'}>Correction Checkpoint State</h1>
        <button  style={{color : this.state.show ? 'red' : 'green'}} onClick={()=> this.setState({show : !this.state.show})}>{this.state.show ? 'Hide' : 'Show'}</button>
        {
          this.state.show && <Profil/>
        }
        
      </div>
    )
  }
}


export default App;
