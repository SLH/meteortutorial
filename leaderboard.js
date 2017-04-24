PlayersList = new Mongo.Collection("players");
if(Meteor.isClient){
    Template.leaderboard.helpers({
        'player': function(){
        	return PlayersList.find();
        },
        'butts': function(){
        	return "booze"
        }
    });
    Template.leaderboard.events({
        'click .player': function(){
        	var playerID = this._id;
        	Session.set('selectedPlayer', playerID);
        	var output = Session.get('selectedPlayer');
        	console.log(output);
        }
    });
}
if(Meteor.isServer){
}