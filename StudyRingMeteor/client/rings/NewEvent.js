import { ringEvents } from "../../collections/events/ringEvents.js";

Template.newEvent.onCreated(function(){
    var self = this;
    self.autorun(function (){
        self.subscribe('ringEvents');
    });
});

Template.NewEvent.events({
  'click .new-event': () => {
      Session.set('newEvent', true);
  },
    'click .fa-close': function() {
        Session.set('newEvent', false);
    }
});
