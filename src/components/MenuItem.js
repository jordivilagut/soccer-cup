import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const MenuItem = props => (
    <li>
        <a href={props.href} className="menuItem boxShadow">
            <div className="itemIconFrame">
                <FontAwesomeIcon className="itemIcon" icon={props.icon}/>
            </div>
            <div class="itemTitle">
                <p>{props.title}</p>
            </div>
        </a>
    </li>
);