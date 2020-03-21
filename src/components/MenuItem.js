import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const MenuItem = props => (
    <li>
        <FontAwesomeIcon icon={props.icon}/>
        <p>{props.title}</p>
    </li>
);