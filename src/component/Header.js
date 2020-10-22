import React from 'react';

function Header(props) {
    return (
        <div>
            <h3>{props.projectname}</h3>
            Welcome to {props.projectname}
            <hr color =" rgb(211, 126, 70)" width="80%" ></hr>
          
        </div>
    );
}

export default Header;