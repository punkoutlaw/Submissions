import React from "react";
import MyButton from "./button";

class UserInput extends React.Component {
    render () {
        return (
            <div className="card mx-auto border-primary login">
                <div className="card-header bg-primary border-primary">
                    <h3>Login Info</h3>
                </div>
                    <div className="card-body">
                        <br></br>
                        <input type='text' className="form-control" placeholder="Username"></input>
                        <br></br>
                        <br></br>
                        <input type='password' className="form-control" placeholder="Password"></input>
                        <br></br>
                        <br></br>
                        <MyButton />
                        <br></br>
                        <br></br>
                    </div>
            </div>
        );
    }
}

export default UserInput;