import React from 'react';
import './UserOutput.css';
const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>UserName: {props.userName}</p>
            <p>I hope 9.0</p>
        </div>
    );
};
export default userOutput;
