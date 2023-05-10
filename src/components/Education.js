import React, { Component } from "react";

export default class Education extends Component {
    onSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        const {setParentState} = this.props;
        return (<>
            <h2>Education Information</h2>
            <form onSubmit={this.onSubmit}>
                <input 
                    onChange={
                        (e => {
                            setParentState('schoolName', e.target.value);
                        })
                    } 
                    type='text' 
                    placeholder="School Name" 
                />
                <input 
                    onChange={
                        (e => {
                            setParentState('studyTitle', e.target.value);
                        })
                    } 
                    type='text' 
                    placeholder="Title of Study" 
                />
                <input 
                    onChange={
                        (e => {
                            setParentState('studyStart', e.target.value);
                        })
                    } 
                    type='date' 
                    placeholder="From" 
                />
                <input 
                    onChange={
                        (e => {
                            setParentState('studyEnd', e.target.value);
                        })
                    } 
                    type='date' 
                    placeholder="To" 
                />
                <button type="submit">Submit</button>
            </form>
        </>);
    }
}