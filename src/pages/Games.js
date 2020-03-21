import React from "react";

export const Games = props => (
    <div id="gameList">
        <div className="ng-scope">
            <div className="game boxShadow">
                <div className="gamePin">|</div>
                <div className="gameData">
                    <div className="gameRow whiteBg topRow">
                        <img className="teamEmblem"/>
                        <p className="ng-binding">Greenbay Lions</p>
                        <div className="teamScore topRow ng-binding">5</div>
                        <div className="gameRow whiteBg bottomRow">
                            <img className="teamEmblem"/>
                            <p className="ng-binding">F.C. Yeager</p>
                            <div className="teamScore bottomRow ng-binding">0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);