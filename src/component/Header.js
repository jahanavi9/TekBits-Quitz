import React from 'react';

function Header(props) {
    return (
        <div>
            <h3>{props.projectname}</h3>
            Welcome to {props.projectname}
          
        </div>
    );
}

export default Header;