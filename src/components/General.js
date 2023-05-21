import React, { Component } from "react";

class General extends Component {
    render() {
        const {setParentState} = this.props;
        return (<>
            <h2 className="form-title">General Information</h2>
            <br/>
            <form onSubmit={this.onSubmit} className='general-form'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={
                            (e => {
                                setParentState('name', e.target.value);
                            })
                        }
                        type='text'
                        placeholder="Enter name"
                        value={this.props.name}
                        id='name'
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
                        placeholder="Enter email"
                        value={this.props.email}
                        id='email'
                    />
                </div>
                <div>
                    <label htmlFor="phone-num">Phone Number</label>
                    <input
                        onChange={
                            (e => {
                                setParentState('phoneNum', e.target.value);
                            })
                        }
                        type='tel'
                        placeholder="Enter phone number"
                        value={this.props.phoneNum}
                        id='phone-num'
                    />
                </div>
                <div id="photo-input">
                    <label htmlFor="photo-label">Photo</label>
                    <input
                        onChange={
                            (e => {
                                if(e.target.files && e.target.files[0]){
                                    setParentState('photo', URL.createObjectURL(e.target.files[0]));
                                }
                            })
                        }
                        type='file'
                        accept=".jpg, .jpeg, .png"
                        id='photo-label'
                    />
                </div>
                <div id="home-address">
                    <label htmlFor="address">Home Address</label>
                    <input
                        onChange={
                            (e => {
                                setParentState('address', e.target.value);
                            })
                        }
                        type='text'
                        placeholder="Enter address"
                        value={this.props.address}
                        id='address'
                    />
                </div>
            </form>
        </>);
    }
}

export default General;