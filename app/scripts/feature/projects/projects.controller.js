'use strict';

angular
  .module('idostuff')
  .controller('ProjectsCtrl', ProjectsCtrl);

  ProjectsCtrl.$inject = ['$state'];

function ProjectsCtrl($state) {
  var vm = this;;

  vm.projects = [
    {
      "id": 1,
      "title": "SuitUp",
      "ref": "suitup",
      "category": "brand identity",
      "date": "11/2013 - 12/2013",
      "summary": "Suit Up est un projet fictif de site e-commerce spécialisé dans le prêt-à-porter masculin.",
      "description": "",
      "thumb": "styles/imgs/thumbs/suitup.png",
      "imgs": [
        {
          "title": "SuitUp business card",
          "url": "RMS_businesscard.PNG"
        }, {
          "title": "SuitUp business card",
          "url": "RMS_businesscard02.PNG"
        }, {
          "title": "SuitUp website homepage",
          "url": "RMS_screen_accueil.png"
        }, {
          "title": "SuitUp website products list",
          "url": "RMS_screen_chemises.png"
        }, {
          "title": "SuitUp website product details",
          "url": "RMS_screen_detail_produit.png"
        }, {
          "title": "SuitUp website composition",
          "url": "RMS_screen_detail_composition.png"
        }
      ]
    },{
      "id": 2,
      "title": "La Bigoud'Anne",
      "ref": "bigoudanne",
      "category": "brand identity",
      "date": "08/2013",
      "summary": "Création d'identité pour une chaîne de restaurants/crêperies fictive.",
      "description": "",
      "thumb": "styles/imgs/thumbs/bigoudanne.png",
      "imgs": [
        {
          "title": "Bigoud'Anne business card",
          "url": "business_card.PNG"
        }, {
          "title": "Bigoud'Anne business card",
          "url": "business_card_2.PNG"
        }, {
          "title": "Bigoud'Anne website homepage",
          "url": "bigoudanne_01_accueil.png"
        }, {
          "title": "Bigoud'Anne website restaurants page",
          "url": "bigoudanne_02_restaurants.png"
        }, {
          "title": "Bigoud'Anne website restaurant details page",
          "url": "bigoudanne_03_restaurant_detail.png"
        }, {
          "title": "Bigoud'Anne website menu page",
          "url": "bigoudanne_04_menu.png"
        }
      ]
    },{
      "id": 3,
      "title": "Sia Vendée",
      "ref": "siavendee",
      "category": "webdesign",
      "date": "07/2013",
      "summary": "Projet de refonte de site web pour un entretien.",
      "description": "",
      "thumb": "styles/imgs/thumbs/siavendee.png",
      "imgs": [
        {
          "title": "",
          "url": ""
        }, {
          "title": "",
          "url": ""
        }, {
          "title": "",
          "url": ""
        }, {
          "title": "",
          "url": ""
        }
      ]
    },{
      "id": 4,
      "title": "Camp' Atlantique",
      "ref": "campatlantique",
      "category": "webdesign",
      "date": "07/2013",
      "summary": "Projet de refonte de site web pour un entretien.",
      "description": "",
      "thumb": "styles/imgs/thumbs/campatlantique.png",
      "imgs": [
        {
          "title": "",
          "url": ""
        }, {
          "title": "",
          "url": ""
        }, {
          "title": "",
          "url": ""
        }, {
          "title": "",
          "url": ""
        }
      ]
    }
  ];

  vm.currentProjectId = $state.params.projectId;

  vm.show = function(index, ref, evt) {
    evt.preventDefault();
    this.currentProjectId = index;
    console.log(this.currentProjectId);
    $state.go("projects", {"projectId": index, "projectRef": ref});
  }

  vm.prev = function(index, evt) {
    evt.preventDefault();

    console.log(index);

    var lastIndex = vm.projects.length;

    vm.projects[index].show = false;
    if(vm.projects[index] > 1) {
      console.log(index);
      index --;
      console.log(index);
      vm.projects[index].show = true;
    } else {
      index = lastIndex;
      vm.projects[index].show = true;
    }
  }

  vm.go = function(projectRef, projectId, evt) {
    evt.preventDefault();
    $state.go("projectDetails", {"projectRef": projectRef, "projectId": projectId});
  }

}
