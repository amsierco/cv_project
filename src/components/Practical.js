import React, { Component } from "react";

export default class Practical extends Component {
    render() {
        const {setParentState} = this.props;
        return (<>
            <h2 className="form-title">Employment Information</h2>
            <br/>
            <form onSubmit={this.onSubmit} className='work-form'>
                <div>
                    <label htmlFor="work-name">Company Name</label>
                    <input
                        onChange={
                            (e => {
                                setParentState('companyName', e.target.value);
                            })
                        }
                        type='text'
                        placeholder="Enter company name"
                        value={this.props.companyName}
                        id='work-name'
                    />
                </div>
                <div>
                    <label htmlFor="work-title">Position</label>
                    <input
                        onChange={
                            (e => {
                                setParentState('position', e.target.value);
                            })
                        }
                        type='text'
                        placeholder="Enter position title"
                        value={this.props.position}
                        id='work-title'
                    />
                </div>
                <div>
                    <label htmlFor="work-start">Start Of Employment</label>
                    <input
                        onChange={
                            (e => {
                                setParentState('workStart', e.target.value);
                            })
                        }
                        type='text'
                        placeholder="Enter start year"
                        value={this.props.workStart}
                        id='work-start'
                    />
                </div>
                <div>
                    <label htmlFor="work-end">End Of Employment</label>
                    <input
                        onChange={
                            (e => {
                                setParentState('workEnd', e.target.value);
                            })
                        }
                        type='text'
                        placeholder="Enter end year"
                        value={this.props.workEnd}
                        id='work-end'
                    />
                </div>
                <div>
                    <label htmlFor="duties">Duties</label>
                    <input
                        onChange={
                            (e => {
                                setParentState('duties', e.target.value);
                            })
                        }
                        type='text'
                        placeholder="Enter official duties"
                        value={this.props.duties}
                        id='duties'
                    />
                </div>
            </form>
        </>);
    }
}