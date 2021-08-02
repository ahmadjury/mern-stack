import React from 'react'

const WithId = (props) => {
    let check = true;
    if(isNaN(props.id)) {
        check = false;
    }
    return (
        <div>
            {check ?<h2>The number is: {props.id}</h2> : <h2>The word is: {props.id}</h2>}
        </div>
    );
};

export default WithId