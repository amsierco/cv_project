import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Practical from './components/Practical';  
import Overview from './components/Overview';

import './styles/form.css';

class App extends Component{
  constructor(props){
    super(props);
    this.setParentState.bind(this);
    this.switchDisplay.bind(this);
    this.state = {
        first: '',
        last: '',
        email: '',
        phoneNum: '',
        address: '',
        schoolName: '',
        studyTitle: '',
        studyStart: '',
        studyEnd: '',
        companyName: '',
        position: '',
        duties: '',
        workStart: '',
        workEnd: '',
        edit: true
    };
  }

  setParentState = (key, newState) => {
    this.setState({[key]:newState});
  }

  switchDisplay = () => {
    this.setState({
      edit: !this.state.edit
    });
  }

  render(){
    return (<>
      {!this.state.edit ?
      <div>
        <Overview {...this.state}/>
        <button onClick={this.switchDisplay} className='edit-btn'>Edit Form</button>
      </div>
      : 
      <div className='forms'><main>
        <General setParentState={this.setParentState} {...this.state}/> 
        <br/>
        <Education setParentState={this.setParentState} {...this.state}/> 
        <br/>
        <Practical setParentState={this.setParentState} {...this.state}/>
        <br/>
        <br/>
        <button onClick={this.switchDisplay} className='submit-btn'>Submit</button>
      </main></div> }
    </>);
  }
}

export default App;
