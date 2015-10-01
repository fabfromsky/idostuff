'use strict';

/* globals angular */

/**
 * @ngdoc object
 * @name  dreamit-webapp
 * @description
 *
 * Main module of dreamitWebapp application
 */

angular
    .module('idostuff', [
        'ui.router',
        'ui.route'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/scripts/feature/home/home.html',
            })
            .state('projects', {
                url: '/works',
                templateUrl: '/scripts/feature/projects/projects.html',
                controller: 'ProjectsCtrl',
                controllerAs: 'pc'
            })
            .state('description', {
                url: '/me',
                templateUrl: '/scripts/feature/description/description.html',
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '/scripts/feature/contact/contact.html',
            });

        $urlRouterProvider.otherwise('/home');
    });
