import React, { Component } from "react";

export default class General extends Component {
    constructor(){
        super();
    
        this.state = {
            genData: {
                name: '',
                email: '',
                phoneNum: '',
            },
            tempData: {
                name: '',
                email: '',
                phoneNum: '',
            },
        };
    }

    // Assigned form info and resets form
    onSubmit = (e) => {
        e.preventDefault();
        const { tempData } = this.state;
        this.setState({
            genData: {
                name: tempData.name,
                email: tempData.email,
                phoneNum: tempData.phoneNum,
            },
            tempData: {
                name: '',
                email: '',
                phoneNum: '',
            },
        });
    }

    render() {
        const { tempData } = this.state;

        return (<>
            <h2>General Information</h2>
            <form onSubmit={this.onSubmit}>
                <input 
                    type='text' 
                    placeholder="Name" 
                    value={tempData.name}
                    required
                    onChange={
                        ((e) => {
                            this.setState({
                                tempData: {
                                    name: e.target.value 
                                }
                            });
                        })}
                />
                <input 
                    type='email' 
                    placeholder="Email" 
                    value={tempData.email}
                    required
                    onChange={
                        ((e) => {
                            this.setState({
                                tempData: {
                                    email: e.target.value 
                                }
                            });
                        })}
                />
                <input 
                    type='tel' 
                    placeholder="Phone Number" 
                    value={tempData.phoneNum}
                    required
                    onChange={
                        ((e) => {
                            this.setState({
                                tempData: {
                                    phoneNum: e.target.value 
                                }
                            });
                        })}
                />
                <button type="submit">Submit</button>
            </form>
        </>);
    }
}