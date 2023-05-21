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
        name: '',
        email: '',
        phoneNum: '',
        address: '',
        photo: '',
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
      <div className='overview'>
        <Overview {...this.state}/>
        <div className='edit-container'>
          <button onClick={this.switchDisplay} className='edit-btn'><i class="fa-solid fa-pen"></i>Edit Form</button>
        </div>
      </div>
      : 
      <div className='forms'>
        <main>
          <General setParentState={this.setParentState} {...this.state}/> 
          <br/>
          <br/>
          <Education setParentState={this.setParentState} {...this.state}/> 
          <br/>
          <br/>
          <Practical setParentState={this.setParentState} {...this.state}/>
          <br/>
          <button onClick={this.switchDisplay} className='submit-btn'>Submit</button>
        </main>
      </div> }
    </>);
  }
}

export default App;
