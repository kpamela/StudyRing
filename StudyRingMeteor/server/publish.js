/**
 * This function returns all rings to the client
 */
Meteor.publish('rings', function(){
    return Rings.find({});
});

/**
 * This functions returns a single ring to the client
 * @param id - id of the ring we need
 */
Meteor.publish('singleRing', function(id){
    check(id, String);
    return Rings.find({_id: id});
});

/**
 * This function returns all users to the client
 */
Meteor.publish('allUsers', function() {
    return Meteor.users.find({});
});