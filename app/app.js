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
                url: '/works/:projectId/:projectRef',
                templateUrl: '/scripts/feature/projects/projects.html',
                controller: 'ProjectsCtrl',
                controllerAs: 'pc'
            })
            .state('projectDetails', {
                url: '/works/:projectId/:projectRef/details',
                templateUrl: '/scripts/feature/project_details/project_details.html',
                controller: 'ProjectDetailsCtrl',
                controllerAs: 'pdc'
            })
            .state('description', {
                url: '/me',
                templateUrl: '/scripts/feature/description/description.html',
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '/scripts/feature/contact/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'cc'
            });

        $urlRouterProvider.otherwise('/home');
    });
