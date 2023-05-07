import React, { Component } from "react";

export default class Practical extends Component {
    constructor(){
        super();
    
        this.state = {
            pracData: {
                companyName: '',
                position: '',
                duties: '',
                workDates: {
                    start: '',
                    end: '',
                },
            },
            tempData: {
                companyName: '',
                position: '',
                duties: '',
                workDates: {
                    start: '',
                    end: '',
                },
            },
        };
    }

    // Assigns form info and resets form
    onSubmit = (e) => {
        e.preventDefault();
        const { tempData } = this.state;
        this.setState({
            pracData: {
                companyName: tempData.companyName,
                position: tempData.position,
                duties: tempData.duties,
                workDates: {
                    start: tempData.workDates.start,
                    end: tempData.workDates.end,
                },
            },
            tempData: {
                companyName: '',
                position: '',
                duties: '',
                workDates: {
                    start: '',
                    end: '',
                },
            },
        });
    }

    render() {
        const { tempData } = this.state;

        return (<>
            <h2>Employment Information</h2>
            <form onSubmit={this.onSubmit}>
                <input 
                    type='text' 
                    placeholder="Company Name" 
                    value={tempData.companyName}
                    required
                    onChange={
                        ((e) => {
                            this.setState({
                                tempData: {companyName: e.target.value}
                            });
                        })}
                />
                <input 
                    type='test' 
                    placeholder="Position Title" 
                    value={tempData.position}
                    required
                    onChange={
                        ((e) => {
                            this.setState({
                                tempData: {position: e.target.value} 
                            });
                        })}
                />
                <input 
                    type='text' 
                    placeholder="Official Duties" 
                    value={tempData.duties}
                    required
                    onChange={
                        ((e) => {
                            this.setState({
                                tempData: {duties: e.target.value} 
                            });
                        })}
                />
                                <input 
                    type='date' 
                    placeholder="From" 
                    value={tempData.workDates.start}
                    required
                    onChange={
                        ((e) => {
                            this.setState({
                                tempData: {workDates: {start: e.target.value}} 
                            });
                        })}
                />
                <input 
                    type='date' 
                    placeholder="To" 
                    value={tempData.workDates.end}
                    required
                    onChange={
                        ((e) => {
                            this.setState({
                                tempData: {workDates: {end: e.target.value}} 
                            });
                        })}
                />
                <button type="submit">Submit</button>
            </form>
        </>);
    }
}