import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

function ReactHeader() {
    return ( 
        <div className="react-header">
            <h2>Made with React</h2>
            <FontAwesomeIcon icon={faReact} className="react-icon"/>
        </div>
    );
}

export default ReactHeader;