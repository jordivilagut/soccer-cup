import React from "react";
import {MenuItem} from "../components/MenuItem";
import {faFutbol} from "@fortawesome/free-solid-svg-icons";
import {Match} from "../components/Match";
import '../styles/Games.css';

export const Games = () => (
    <div id="gamesMenu">
        <ul>
            <h2>Jornada 1</h2>
            <Match name1="Liverpool F.C." name2="Paris Saint Germain" icon1="lvp.png" icon2="psg.png" score1="5" score2="3"/>
            <Match name1="Real Madrid C.F." name2="Manchester City" icon1="rmd.png" icon2="city.png" score1="-" score2="-"/>
            <Match name1="F.C.Barcelona" name2="Juventus F.C." icon1="fcb.png" icon2="juv.png" score1="-" score2="-"/>

            <h2>Jornada 2</h2>
            <Match name1="Real Madrid C.F." name2="Paris Saint Germain" icon1="rmd.png" icon2="psg.png" score1="-" score2="-"/>
            <Match name1="Liverpool F.C." name2="F.C.Barcelona" icon1="lvp.png" icon2="fcb.png" score1="-" score2="-"/>
            <Match name1="Manchester City" name2="Juventus F.C." icon1="city.png" icon2="juv.png" score1="-" score2="-"/>

            <h2>Jornada 3</h2>
            <Match name1="F.C.Barcelona" name2="Paris Saint Germain" icon1="fcb.png" icon2="psg.png" score1="-" score2="-"/>
            <Match name1="Real Madrid C.F." name2="Juventus F.C." icon1="rmd.png" icon2="juv.png" score1="-" score2="-"/>
            <Match name1="Liverpool F.C." name2="Manchester City" icon1="lvp.png" icon2="city.png" score1="-" score2="-"/>

            <h2>Jornada 4</h2>
            <Match name1="Juventus F.C." name2="Paris Saint Germain" icon1="juv.png" icon2="psg.png" score1="-" score2="-"/>
            <Match name1="F.C.Barcelona" name2="Manchester City" icon1="fcb.png" icon2="city.png" score1="-" score2="-"/>
            <Match name1="Real Madrid C.F." name2="Liverpool F.C." icon1="rmd.png" icon2="lvp.png" score1="-" score2="-"/>

            <h2>Jornada 5</h2>
            <Match name1="Manchester City" name2="Paris Saint Germain" icon1="city.png" icon2="psg.png" score1="-" score2="-"/>
            <Match name1="Liverpool F.C." name2="Juventus F.C." icon1="lvp.png" icon2="juv.png" score1="-" score2="-"/>
            <Match name1="Real Madrid C.F." name2="F.C.Barcelona" icon1="rmd.png" icon2="fcb.png" score1="-" score2="-"/>

            <MenuItem href="/" title="Main Menu" icon={faFutbol}/>
        </ul>
    </div>
);