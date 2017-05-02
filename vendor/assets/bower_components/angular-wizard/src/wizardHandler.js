angular.module('mgo-angular-wizard').factory('WizardHandler', function() {
   var service = {};

   service.wizards = {};
   
   service.defaultName = "defaultWizard";
   
   service.addWizard = function(name, wizard) {
       service.wizards[name] = wizard;
   };
   
   service.removeWizard = function(name) {
       delete service.wizards[name];
   };
   
   service.wizard = function(name) {
       var nameToUse = name;
       if (!name) {
           nameToUse = service.defaultName;
       }
       
       return service.wizards[nameToUse];
   };
   
   return service;
});
