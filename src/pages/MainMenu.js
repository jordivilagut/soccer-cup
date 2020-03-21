import {MenuItem} from "../components/MenuItem";
import {faChartLine, faChild, faFutbol, faUser} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const MainMenu = () => (
    <nav>
        <ul>
            <MenuItem id="games" title="Games" icon={faFutbol}/>
            <MenuItem id="teams" title="Teams" icon={faChild}/>
            <MenuItem id="standings" title="Standings" icon={faChartLine}/>
            <MenuItem id="profile" title="My Profile" icon={faUser}/>
        </ul>
    </nav>
);