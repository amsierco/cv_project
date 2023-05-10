import React, { Component } from "react";

class General extends Component {

    onSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        const {setParentState} = this.props;
        return (<>
            <h2>General Information</h2>
            <form onSubmit={this.onSubmit}>
                <input
                    onChange={
                        (e => {
                            setParentState('name', e.target.value);
                        })
                    }       
                    type='text' 
                    placeholder="Name"
                />
                <input 
                    onChange={
                        (e => {
                            setParentState('email', e.target.value);
                        })
                    } 
                    type='email' 
                    placeholder="Email" 

                />
                <input 
                    onChange={
                        (e => {
                            setParentState('phoneNum', e.target.value);
                        })
                    } 
                    type='tel' 
                    placeholder="Phone Number" 
                />
                <button type="submit">Submit</button>
            </form>
        </>);
    }
}

export default General;