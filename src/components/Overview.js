import React, { Component } from "react";

class Overview extends Component{

    render(){
        return(<>
            <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            />
                <div className="sidebar">
                <div className="general">
                    {this.props.photo !== '' ? 
                        <img
                        src={this.props.photo}
                        alt=""
                        className="photo"
                        />
                    : null}
                    <div className="name">{this.props.first} {this.props.last}</div>
                    <div className="email">{this.props.email !== '' ? 
                    <><i className="fa-regular fa-envelope" />
                        {this.props.email}
                    </>
                        : null}
                    </div>
                    <div className="phone">{this.props.phoneNum !== '' ? 
                    <><i className="fa-solid fa-phone" />
                        {this.props.phoneNum}
                    </>
                        : null}
                    </div>
                    <div className="address">{this.props.address !== '' ?
                    <><i className="fa-solid fa-location-dot" />
                        {this.props.address}
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
                    <div className="school">{this.props.schoolName}</div>
                    <div className="study-title">{this.props.studyTitle}</div>
                    <div className="study-dates">{this.props.studyStart === '' || this.props.studyEnd === '' ? null : this.props.studyStart + '-' + this.props.studyEnd}</div>
                </div>
                <br />
                <div className="work">
                    <div className="work-header">
                    <i className="fa-solid fa-arrow-right" />
                    Employment
                    </div>
                    <div className="company">{this.props.companyName}</div>
                    <div className="position">{this.props.position}</div>
                    <div className="duties">{this.props.duties}</div>
                    <div className="wokr-dates">{this.props.workStart === '' || this.props.workEnd === '' ? null : this.props.workStart + '-' + this.props.workEnd}</div>
                </div>
            </div>
        </>);
    }
}

export default Overview;