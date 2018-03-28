'use strict';
var APP_ID = 'amzn1.ask.skill.29ef2866-b5fe-4cd6-a36f-258c91448129';
var AlexaSkill = require('./AlexaSkill');
var name = '';
var SPEECH_OUTPUT = 'Hello' + name;

var GreeterService = function(){
    AlexaSkill.call(this, APP_ID);
};
GreeterService.prototype = Object.create(AlexaSkill.prototype);

var helloResponseFunction = function(intent, session, response){
    response.tell(SPEECH_OUTPUT);
};
GreeterService.prototype.eventHandlers.onLaunch = SPEECH_OUTPUT;

GreeterService.prototype.intentHandlers = {
	"HelloWorldIntent": function(intent, session, response) {
        name = intent.slots.search.value;
    }
};

exports.handler = function(event, context) {
    var greeterService = new GreeterService();
    greeterService.execute(event, context);
};