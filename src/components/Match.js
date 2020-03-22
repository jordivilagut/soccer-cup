import React from "react";

export const Match = props => (
    <li className="matchItem boxShadow">
        <div className="matchTeamItem">
            <div className="itemIconFrame">
                <img src={require("../assets/badges/" + props.icon1)} className="itemIcon"/>
            </div>
            <div className="data">
                <div className="itemTitle">
                    <p>{props.name1}</p>
                </div>
                <div className="scoreFrame">
                    <p>{props.score1}</p>
                </div>
            </div>
        </div>
        <div className="matchTeamItem">
            <div className="itemIconFrame">
                <img src={require("../assets/badges/" + props.icon2)} className="itemIcon"/>
            </div>
            <div className="data">
                <div className="itemTitle">
                    <p>{props.name2}</p>
                </div>
                <div className="scoreFrame">
                    <p>{props.score2}</p>
                </div>
            </div>
        </div>
    </li>
);