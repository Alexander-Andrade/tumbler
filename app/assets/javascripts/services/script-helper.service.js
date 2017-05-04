(function() {
    'use strict';

    angular.module('services').factory('scriptHelper',[ 'Script', 'automationSocket', 'controlsInfo', function(Script, automationSocket, controlsInfo) {
        var h = {};


         function DevControl(model){
            var self = this;
            this.model = _.cloneDeep(model);

            this.compile = function () {
                return Mustache.render("{{area.id}}#{{device.dev_id}}#{{control.ctrl_id}}", self.model);
            };
        };

         function Comp(){
            var self = this;
            this.model = {
                item: null
            };


            this.compile = function () {
                return this.model.item;
            };
        };

         function CtrlInput(controlType) {
            this.model = {
                type: controlType,
                value: null
            };

            this.compile = function () {
                return this.model.value;
            };
        };

         function LogicAndOr() {
            this.model = {
                value: null
            };

            this.compile = function () {
                return this.model.value;
            };
        };

         function Block(){
            var self = this;
            this.parent = null;
            this.children = [];
            this.head = 0;

            this.current = function () {
                return this.children[this.head];
            };

            this.next = function () {
                if(this.children.length > this.head) {
                    this.head++;
                }
                return this.current();
            };

            this.prev = function () {
                if(this.head > 0) {
                    this.head--;
                }
                return this.current();
            };

            this.first = function () {
                return this.children[0];
            };

            this.last = function () {
                return _.last(this.children);
            };

            this.addChild = function (child) {
                child.parent = this;
                this.children.push(child);
                this.head = this.children.length - 1;
            };

            this.compile = function () {
                return _.reduce(self.children, function (template, child) {
                    return template + child.compile();
                });
            };
        };

        h.template = function () {
            var tplt = new Block();

            tplt.addChild(new Block());
            tplt.addChild(new Block());
            tplt.cond = tplt.children[0];
            tplt.oper = tplt.children[1];

            tplt.addCondition = function () {
                tplt.cond.addChild(new Block());
            };

            tplt.condDevControl = function(model){
                tplt.cond.last().addChild(new DevControl(model));
            };

            tplt.condComp = function(){
                tplt.cond.last().addChild(new Comp());
            };

            tplt.condInput = function (controlType) {
                tplt.cond.last().addChild(new CtrlInput(controlType));
            };

            tplt.condLogicAndOr = function () {
                tplt.cond.addChild(new LogicAndOr());
            };
            return tplt;
        };


        return h;
    }]);

}());