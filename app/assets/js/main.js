var nyslApp = angular.module('nyslApp', []);
function restoreChats(){
    var newGameKey;
    var object = {};

    for(var i = 0; i < myGames.length; i++){
        newGameKey = "game" + i;
        object[newGameKey] = "";
        firebase.database().ref().update(object);
    }
}

nyslApp.controller('nyslController', function($scope){
    $scope.historyArray = ['#index'];
    $scope.currentUser = "Invalid";
    $scope.gameID = 0;
    $scope.games = myGames;
    $scope.teams = myTeams;
    $scope.users = myUsers;
    $scope.filteredTeams = myTeams;

    $scope.showNavBar = function(){
        $('#navBar').removeClass('hidden');
    };

    $scope.hideNavBar = function(){
        $('#navBar').addClass('hidden');
    };

    $scope.noNeedNavBar = function(destination){
        if(destination == '#index'){return true};
    };

    $scope.showHideLocation = function(){
        $('#locationInfo').toggleClass('hidden');
    };

    $scope.toggleMyTeamBtn = function(){
        $('#followBtn').toggleClass('unClicked');
        $('#followIcon').toggleClass('hidden');
    };

    $scope.showMessageBoard = function(gameID){
        for(var i = 0; i < $scope.games.length; i++){
            $('#messageBoard' + i).addClass('hidden');
            $('#messageBoard' + i).removeClass('messageBoard');
        }
        $('#messageBoard' + gameID).addClass('messageBoard');
        $('#messageBoard' + gameID).removeClass('hidden');
    };

    $scope.redirect = function(currentPage, destination){
        $(currentPage).addClass('hidden');
        $(destination).removeClass('hidden');
        if($scope.noNeedNavBar(destination)){$scope.hideNavBar();};
    };

    $scope.addToHistory = function(destination){
        $scope.historyArray.splice(0, 0, destination);
    };

    $scope.removeFromHistory = function(){
        $scope.historyArray.shift();
    };

    $scope.goForth = function(current, destination) {
        $scope.redirect(current, destination);
        $scope.addToHistory(destination);
    };

    $scope.goBack = function(){
        var currentPage = $scope.historyArray[0];
        var destination = $scope.historyArray[1];
        $scope.redirect(currentPage, destination);
        $scope.removeFromHistory();
    };

    $scope.checkMessageUser = function(snapshot){
        return snapshot.val().uid == $scope.currentUser;
    };

    $scope.setMessageClass = function(userItsMe){
        if(userItsMe){return "own"}
        else{return "sender"};
    };

    $scope.wrapMessageInHTML = function(snapshot, messageClass){
        var html = '<div class=\'message whiteBg ' + messageClass +'\'><p class=\'userName strong\'>' + snapshot.val().username + '</p><p class=\'userMessage\'>' + snapshot.val().text + '</p></div>';

        return html;
    };

    $scope.listenForNewMessages = function(ref){
        ref.on("child_added", function(snapshot){
            var userItsMe = $scope.checkMessageUser(snapshot);
            var messageClass = $scope.setMessageClass(userItsMe);
            var html = $scope.wrapMessageInHTML(snapshot, messageClass);

            $scope.addMessageToBoard(html);
        });
    };

    $scope.initMessageBoards = function(){
        var html = "";
        for(var i = 0; i < $scope.games.length; i++){
            html += '<div id=\'messageBoard' + i + '\' class="messageBoard"></div>';
            var ref = firebase.database().ref("game" + i);
            $scope.listenForNewMessages(ref);
        }
        $('#messageBoardGroup').html(html);
    };

    $scope.initMessageBoards();

    $scope.changeGame = function(gameID) {
        $scope.gameID = gameID;
        $scope.homePlayers = $scope.games[gameID].homeTeam.players;
        $scope.awayPlayers = $scope.games[gameID].awayTeam.players;
        $scope.showMessageBoard(gameID);
    };

    $scope.changeTeam = function(teamID) {
        $scope.teamID = teamID;
        $scope.teamPlayers = $scope.teams[teamID].players;
        $scope.getTeamGames(teamID);
    };

    $scope.filterTeams = function(){
        $scope.filteredTeams = [];
        var searchText = $scope.searchText.toLowerCase();
        $scope.teams.forEach(function(team){
            if(team.name.toLowerCase().includes(searchText) || searchText == '' ){
                $scope.filteredTeams.push(team);
            }
        });
    };

    $scope.getTeamGames = function(teamID) {
        $scope.teamGames = [];
        $scope.games.forEach(function(game){
            if(game.homeTeam.id == teamID || game.awayTeam.id == teamID){
                $scope.teamGames.push(game);
            }
        });
    };

    $scope.checkLogIn = function() {
        if($scope.currentUser == "Invalid"){
            $scope.goForth('#index','#loginPage');
        }else{
            $scope.goForth('#index','#myProfile');
        }
    };

    $scope.goForthFromLogIn = function(){
        if($scope.historyArray[1] == '#index'){
            $scope.goForth('#loginPage', '#myProfile');
        }else{
            $scope.goForth('#loginPage', '#chatRoom');
        }
    };

    $scope.loginProcess = function(){
        var validUser = false;

        myUsers.forEach(function(user){
            if($scope.username == user.name){
                validUser = true;
                if($scope.password == user.password){
                    $scope.currentUser = user.uid;
                    $scope.setUserPicture();
                    $scope.goForthFromLogIn();
                }
                else{alert("invalid password")};
            }
        });
        if(validUser === false){alert("invalid username")}
    };

    $scope.setUserPicture = function(){
        var avatar = $scope.users[$scope.currentUser].avatar;
        $('#myUserIcon').html('<img class=\'avatar\' src=\'' + avatar + '\'>');
    };

    $scope.uploadMessageOnEnter = function(event) {
        if(event.which == 13) {
            $scope.uploadMessage();
        }
    };

    $scope.uploadMessage = function(){
        var messageBoard = "game" + $scope.gameID;
        var messageKey = firebase.database().ref().child(messageBoard).push().key;
        var message = {
            username: $scope.users[$scope.currentUser].name,
            uid: $scope.users[$scope.currentUser].uid,
            text: $scope.message
        };

        var update = {};
        update[messageKey] = message;

        firebase.database().ref(messageBoard).update(update);
    };

    $scope.addMessageToBoard = function(html){
        $('#messageBoard' + $scope.gameID).append(html);
        window.scrollTo(0,$(window).height());
        $("#sendBox").val("");
    }
});










