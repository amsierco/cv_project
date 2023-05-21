import React from "react";

const Education = ({setParentState, schoolName, studyTitle, studyStart, studyEnd}) => {
    return (<>
        <h2 className="form-title">Education Information</h2>
        <br/>
        <form onSubmit='#' className='education-form'>
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
                    value={schoolName}
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
                    value={studyTitle}
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
                    value={studyStart}
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
                    value={studyEnd}
                    id='study-end'
                />
            </div>
        </form>
    </>);
}

export default Education;