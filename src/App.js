import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Practical from './components/Practical';  
import Overview from './components/Overview';

class App extends Component{
  constructor(props){
    super(props);
    this.setParentState.bind(this);
    this.state = {
        name: '',
        email: '',
        phoneNum: '',
        schoolName: '',
        studyTitle: '',
        studyStart: '',
        studyEnd: '',
        companyName: '',
        position: '',
        duties: '',
        workStart: '',
        workEnd: ''
    };
  }

  setParentState = (key, newState) => {
    this.setState({[key]:newState});
  }

  render(){
    return (<>
      <General setParentState={this.setParentState}/> 
      <Education setParentState={this.setParentState}/> 
      <Practical setParentState={this.setParentState}/> 
      <Overview name={this.state.name}/>
    </>);
  }
}

export default App;
