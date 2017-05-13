(function() {
    'use strict';

    angular.module('controllers').
    controller("scriptModalCtrl", [ '$scope', 'Script', 'areas', 'close', 'WizardHandler', 'scriptHelper','controlsInfo',
        function($scope, Script, areas, close, WizardHandler, scriptHelper, controlsInfo) {
        $scope.areas = areas;

        $scope.wizard = function () {
            return WizardHandler.wizard('scripts_wizard');
        };
        $scope.script = {
            code: ""
        };
        $scope.wlist = [];
        $scope.wlist.get = function (i) {
            if(i < 0){
                return this[this.length+i];
            }
            return this[i];
        };

        $scope.step0 = function () {
            $scope.wlist.push({
                template: function () {
                    return "if { ";
                }
            });
        };

        $scope.step1 = function () {
            $scope.wlist.push({
                inputTypesList: ['Time moment', 'Device control value'],
                selectedIndex: null
            });
        };

        $scope.step0();
        $scope.step1();



        $scope.step2 = function () {
            var choice = $scope.wlist.get(-1);
            if(choice.selectedIndex == 0){
                //time moment
                $scope.wlist.push({
                    time: null,
                    template:  function(){
                        return "(time={{{time}}}";
                    }
                });
            }else if(choice.selectedIndex == 1){
                var ctrlDefaults = $scope.defaultsForControl();
                $scope.wlist.push({
                    area: ctrlDefaults.area,
                    device: ctrlDefaults.device,
                    control: ctrlDefaults.control,
                    template:  function(){
                        return "( {{device.dev_id}}#{{control.ctrl_id}}";
                    }
                });
                $scope.wizard().goTo(2);
            }
        };

        $scope.step3 = function () {
            $scope.step7();
            $scope.wizard().goTo(6);
        };

        $scope.step4 = function () {
            var ctrlBundle = $scope.wlist.get(-1);
            var ctrlType = ctrlBundle.control.type.name;

            $scope.wlist.push({
                compList: controlsInfo[ctrlType].comp,
                comp: null,
                template: function() { return this.comp }
            });
        };

        $scope.step5 = function () {
            $scope.wlist.push({
                inputTypesList: ['value from input', 'value from device control'],
                selectedIndex: null
            });
        };
        
        $scope.step6 = function () {
            var choice = $scope.wlist.get(-1);
            var ctrlBundle = $scope.wlist.get(-3);
            var ctrlTypeName = ctrlBundle.control.type.name;
            var ctrlDefaults = $scope.defaultsForControl();
            switch (choice.selectedIndex){
                case 0:
                    $scope.wlist.push({
                        ctrlTypeName: ctrlTypeName,
                        model: null,
                        template: function(){ return "{{&model}}"; }
                    });
                    break;
                case 1:
                    $scope.wlist.push({
                        area: ctrlDefaults.area,
                        device: ctrlDefaults.device,
                        control: ctrlDefaults.control,
                        template: function() { return "{{device.dev_id}}#{{control.ctrl_id}}" }
                    });
                    break;
            }
        };

        $scope.step7 = function () {
            $scope.wlist.push({
                keyWords: ['and', 'or', 'then'],
                keyWord: null,
                template: function() {
                    if (_.includes(['and', 'or'], this.keyWord)) {
                        return ") {{keyWord}} ";
                    }
                    if(this.keyWord == 'then'){
                        return ") } \nthen\nbegin\n";
                    }
                }
            });
        };

        $scope.step8 = function () {
            var choice = $scope.wlist.get(-1);
            var wizard = $scope.wizard();
            var ctrlDefaults = $scope.defaultsForControl();

            if(_.includes(['and', 'or'], choice.keyWord)) {
                $scope.step1();
                wizard.goTo(0);
            }else if(choice.keyWord=='then'){
                $scope.wlist.push({
                    step6: true,
                    area: ctrlDefaults.area,
                    device: ctrlDefaults.device,
                    control: ctrlDefaults.control,
                    template: function() {
                        return "{{device.dev_id}}#{{control.ctrl_id}} := ";
                    }
                });
            }
        };
        
        $scope.step9 = function () {
            var ctrlBundle = $scope.wlist.get(-1);
            var ctrlTypeName = ctrlBundle.control.type.name;
            $scope.wlist.push({
                ctrlTypeName: ctrlTypeName,
                model: null,
                template: function() {
                    return "{{&model}};";
                }
            });
        };

        $scope.step10 = function () {
            $scope.wlist.push({
                keyWords: ['continue', 'end'],
                keyWord: null,
                template: function() {
                    if (this.keyWord == 'continue') {
                        return "\n";
                    }
                    if(this.keyWord == 'end'){
                        return "\nend";
                    }
                }
            });
        };

        $scope.step11 = function () {
            var choice = $scope.wlist.get(-1);
            if(choice.keyWord=='continue'){
                var ctrlDefaults = $scope.defaultsForControl();
                $scope.wlist.push({
                    area: ctrlDefaults.area,
                    device: ctrlDefaults.device,
                    control: ctrlDefaults.control,
                    template: function() {
                        return "{{device.dev_id}}#{{control.ctrl_id}} := ";
                    }
                });
                $scope.wizard().goTo(7);
            }

            $scope.script.code = _.reduce($scope.wlist, function (result, elem) {
                if(_.has(elem, 'template') && _.isFunction(elem.template)){
                    result += Mustache.render(elem.template(), elem);
                }
                return result;
            }, "");
        };

        $scope.codeMirrorOptions = {
            theme: 'twilight',
            lineWrapping : true,
            lineNumbers: true,
            readOnly: 'nocursor',
            mode: 'Javascript'
        };

        $scope.finish = function () {
            close($scope.script, 500);
        };

        $scope.stepBack = function () {
            $scope.wlist.pop();
            $scope.wizard().previous();
        };

        $scope.isCurrentStep = function (num) {
            return $scope.wizard().currentStepNumber() == num;
        };

        $scope.defaultsForControl = function () {
          return {
              area: areas[0],
              device: areas[0].devices[0],
              control: areas[0].devices[0].controls[0]
          }
        };
    }]);

}());
