import React from "react";

export const StandingsItem = props => (
    <li className="menuItem boxShadow">
        <div className="itemIconFrame">
            <img src={require("../assets/badges/" + props.icon)} className="itemIcon"/>
        </div>
        <div className="data">
            <div className="itemTitle">
                <p>{props.name}</p>
            </div>
            <div className="standingsPoints">
                <p>{props.points}</p>
            </div>
        </div>
    </li>
);