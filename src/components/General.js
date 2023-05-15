import React, { Component } from "react";

class General extends Component {
    render() {
        const {setParentState} = this.props;
        return (<>
            <h2 className="form-label">General Information</h2>
            <br/>
            <form onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor="first">First Name</label>
                    <input
                        onChange={
                            (e => {
                                setParentState('first', e.target.value);
                            })
                        }
                        type='text'
                        placeholder="First Name"
                        value={this.props.first}
                        id='first'
                    />
                </div>
                <div>
                    <label htmlFor="lst">Last Name</label>
                    <input
                        onChange={
                            (e => {
                                setParentState('last', e.target.value);
                            })
                        }
                        type='text'
                        placeholder="Last Name"
                        value={this.props.last}
                        id='last'
                    />
                </div>
                <div>
                    <label htmlFor="email">Personal Email</label>
                    <input
                        onChange={
                            (e => {
                                setParentState('email', e.target.value);
                            })
                        }
                        type='email'
                        placeholder="Email"
                        value={this.props.email}
                        id='email'
                    />
                </div>
                <div>
                    <label htmlFor="phone-num">Personal Phone Number</label>
                    <input
                        onChange={
                            (e => {
                                setParentState('phoneNum', e.target.value);
                            })
                        }
                        type='tel'
                        placeholder="Phone Number"
                        value={this.props.phoneNum}
                        id='phone-num'
                    />
                </div>
                <div>
                    <label htmlFor="address">Home Address</label>
                    <input
                        onChange={
                            (e => {
                                setParentState('address', e.target.value);
                            })
                        }
                        type='text'
                        placeholder="Address"
                        value={this.props.address}
                        id='address'
                    />
                </div>
            </form>
        </>);
    }
}

export default General;