import React from "react";

export const Team = props => (
    <li className="menuItem boxShadow">
        <div className="itemIconFrame">
            <img src={require("../assets/badges/" + props.icon)} className="itemIcon"/>
        </div>
        <div className="itemTitle">
            <p>{props.name}</p>
        </div>
    </li>
);