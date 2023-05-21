import React from "react";

const Overview = ({photo, name, email, phoneNum, address, schoolName, studyStart, studyTitle, studyEnd, companyName, position, duties, workStart, workEnd}) => {
    return(<>
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
            <div className="sidebar">
            <div className="general">
                {photo !== '' ? 
                    <img
                    src={photo}
                    alt="Profile"
                    className="photo"
                    />
                : null}
                <div className="name">{name}</div>
                <br/>
                <div className="email">{email !== '' ? 
                <><i className="fa-regular fa-envelope" />
                    {email}
                </>
                    : null}
                </div>
                <br/>
                <div className="phone">{phoneNum !== '' ? 
                <><i className="fa-solid fa-phone" />
                    {phoneNum}
                </>
                    : null}
                </div>
                <br/>
                <div className="address">{address !== '' ?
                <><i className="fa-solid fa-location-dot" />
                    {address}
                </>
                    : null}
                </div>
            </div>
            </div>
            <div className="overview-content">
            <div className="education">
                <div className="education-header">
                <i className="fa-solid fa-arrow-right" />
                Education
                </div>
                <div className="school">{schoolName}</div>
                <div className="study-title">{studyTitle}</div>
                <div className="study-dates">{studyStart === '' || studyEnd === '' ? null : studyStart + '-' + studyEnd}</div>
            </div>
            <br />
            <div className="work">
                <div className="work-header">
                <i className="fa-solid fa-arrow-right" />
                Employment
                </div>
                <div className="company">{companyName}</div>
                <div className="position">{position}</div>
                <div className="duties">{duties}</div>
                <div className="wokr-dates">{workStart === '' || workEnd === '' ? null : workStart + '-' + workEnd}</div>
            </div>
        </div>
    </>);
}

export default Overview;