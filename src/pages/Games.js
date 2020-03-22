import React from "react";
import {MenuItem} from "../components/MenuItem";
import {faFutbol} from "@fortawesome/free-solid-svg-icons";
import {Match} from "../components/Match";
import '../styles/Games.css';

export const Games = () => (
    <div id="gamesMenu">
        <ul>
            <Match name1="Barcelona" name2="Man. City" icon1="fcb.png" icon2="city.png" score1="3" score2="1"/>
            <Match name1="Liverpool" name2="Madrid" icon1="lvp.png" icon2="rmd.png" score1="0" score2="3"/>
            <Match name1="Man. City" name2="Barcelona" icon1="city.png" icon2="fcb.png" score1="3" score2="0"/>
            <Match name1="Man. City" name2="Team X" icon1="city.png" icon2="emblem.png" score1="0" score2="0"/>
            <MenuItem href="/" title="Main Menu" icon={faFutbol}/>
        </ul>
    </div>
);