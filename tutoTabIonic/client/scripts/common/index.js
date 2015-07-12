'use strict';
require('angular-ui-router');
require('angular-ionic');
require('ng-cordova');

var modulename = 'common';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;

    var angular = require('angular');
    var app = angular.module(fullname, ['ui.router', 'ionic', 'ngCordova']);
    // inject:folders start
    // inject:folders end

    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('tab', {
                    url: '/tab',
                    abstract: true,
                    template: require('./views/tabs.html')
                })
                .state('tab.dash', {
                    url: '/dash',
                    views: {
                        'tab-dash': {
                            template: require('./views/tab-dash.html')
                        }
                    }
                })
                .state('tab.friends', {
                    url: '/friends',
                    views: {
                        'tab-friends': {
                            template: require('./views/tab-friends.html'),
                            controller: fullname + '.friendCtrl as vm'
                        }
                    }
                })
                .state('tabs.cool', {
                    url: '/cool',
                    views: {
                        'tab-friends-part': {
                            template: require('./views/tab-friends-part.html')
                        }
                    }
                })
                .state('tab.account', {
                    url: '/account',
                    views: {
                        'tab-account': {
                            template: require('./views/tab-account.html')
                        }
                    }
                });
            $urlRouterProvider.otherwise('tab/account');
        }
    ]);

    return app;
};
