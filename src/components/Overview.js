import React, { Component } from "react";

class Overview extends Component{

    render(){
        return(<>
            <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            />
            <div className="wrapper">
                {/* <div className="overview-header"></div> */}
                <div className="overview">
                    <div className="sidebar">
                    <div className="general">
                        <img
                        src="https://images.unsplash.com/photo-1682465184253-ac7d28a0452a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                        alt="Profile"
                        className="photo"
                        />
                        <div className="name">{this.props.first} {this.props.last}</div>
                        <div className="email">
                        <i className="fa-regular fa-envelope" />
                            {this.props.email}
                        </div>
                        <div className="phone">
                        <i className="fa-solid fa-phone" />
                            {this.props.phoneNum}
                        </div>
                        <div className="address">
                        <i className="fa-solid fa-location-dot" />
                            {this.props.address}
                        </div>
                        <br />
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
            </div>
        </div>
        </>);
    }
}

export default Overview;