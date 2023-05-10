import React, { Component } from "react";

export default class Practical extends Component {

    onSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        const {setParentState} = this.props;
        return (<>
            <h2>Employment Information</h2>
            <form onSubmit={this.onSubmit}>
                <input 
                    onChange={
                        (e => {
                            setParentState('companyName', e.target.value);
                        })
                    } 
                    type='text' 
                    placeholder="Company Name" 
                />
                <input 
                    onChange={
                        (e => {
                            setParentState('position', e.target.value);
                        })
                    } 
                    type='text' 
                    placeholder="Position Title" 
                />
                <input 
                    onChange={
                        (e => {
                            setParentState('duties', e.target.value);
                        })
                    } 
                    type='text' 
                    placeholder="Official Duties" 
                />
                <input 
                    onChange={
                        (e => {
                            setParentState('workStart', e.target.value);
                        })
                    } 
                    type='date' 
                    placeholder="From" 
                />
                <input 
                    onChange={
                        (e => {
                            setParentState('workEnd', e.target.value);
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