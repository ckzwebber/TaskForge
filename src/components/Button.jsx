import React from 'react';
import './Button.css';

const Button = ( {children, taskAdd} ) => {
    return ( 
        <button onClick={taskAdd} className="button">{children}</button>
     );
}
 


export default Button;