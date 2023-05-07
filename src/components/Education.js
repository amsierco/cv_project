import React, { Component } from "react";

export default class Education extends Component {
    constructor(){
        super();
    
        this.state = {
            eduData: {
                schoolName: '',
                studyTitle: '',
                studyDates: {
                    start: '',
                    end: '',
                },
            },
            tempData: {
                schoolName: '',
                studyTitle: '',
                studyDates: {
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
            eduData: {
                schoolName: tempData.schoolName,
                studyTitle: tempData.studyTitle,
                studyDates: {
                    start: tempData.studyDates.start,
                    end: tempData.studyDates.end,
                },
            },
            tempData: {
                schoolName: '',
                studyTitle: '',
                studyDates: {
                    start: '',
                    end: '',
                },
            },
        });
    }

    render() {
        const { tempData } = this.state;

        return (<>
            <h2>Education Information</h2>
            <form onSubmit={this.onSubmit}>
                <input 
                    type='text' 
                    placeholder="School Name" 
                    value={tempData.schoolName}
                    required
                    onChange={
                        ((e) => {
                            this.setState({
                                tempData: {schoolName: e.target.value}
                            });
                        })}
                />
                <input 
                    type='text' 
                    placeholder="Title of Study" 
                    value={tempData.studyTitle}
                    required
                    onChange={
                        ((e) => {
                            this.setState({
                                tempData: {studyTitle: e.target.value} 
                            });
                        })}
                />
                <input 
                    type='date' 
                    placeholder="From" 
                    value={tempData.studyDates.start}
                    required
                    onChange={
                        ((e) => {
                            this.setState({
                                tempData: {studyDates: {start: e.target.value}} 
                            });
                        })}
                />
                <input 
                    type='date' 
                    placeholder="To" 
                    value={tempData.studyDates.end}
                    required
                    onChange={
                        ((e) => {
                            this.setState({
                                tempData: {studyDates: {end: e.target.value}} 
                            });
                        })}
                />
                <button type="submit">Submit</button>
            </form>
        </>);
    }
}