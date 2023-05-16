import React, { Component } from "react";

export default class Education extends Component {
    render() {
        const {setParentState} = this.props;
        return (<>
            <h2 className="form-label">Education Information</h2>
            <br/>
            <form onSubmit={this.onSubmit} className='education-form'>
                <div>
                    <label htmlFor="school-name">School's Name</label>
                    <input
                        onChange={
                            (e => {
                                setParentState('schoolName', e.target.value);
                            })
                        }
                        type='text'
                        placeholder="Enter school name"
                        value={this.props.schoolName}
                        id='school-name'
                    />
                </div>
                <div>
                    <label htmlFor="school-study">Area Of Study</label>
                    <input
                        onChange={
                            (e => {
                                setParentState('studyTitle', e.target.value);
                            })
                        }
                        type='text'
                        placeholder="Enter program title"
                        value={this.props.studyTitle}
                        id='school-study'
                    />
                </div>
                <div>
                    <label htmlFor="study-start">Start Of Enrollment</label>
                    <input
                        onChange={
                            (e => {
                                setParentState('studyStart', e.target.value);
                            })
                        }
                        type='text'
                        placeholder="Enter start year"
                        value={this.props.studyStart}
                        id='study-start'
                    />
                </div>
                <div>
                    <label htmlFor="study-end">End Of Enrollment</label>
                    <input
                        onChange={
                            (e => {
                                setParentState('studyEnd', e.target.value);
                            })
                        }
                        type='text'
                        placeholder="Enter end year"
                        value={this.props.studyEnd}
                        id='study-end'
                    />
                </div>
            </form>
        </>);
    }
}