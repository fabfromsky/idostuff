'use strict';

angular
  .module('idostuff')
  .controller('ProjectsCtrl', ProjectsCtrl);

function ProjectsCtrl() {
  var vm = this;

  vm.projects = [
    {
      "id": 1,
      "title": "SuitUp",
      "ref": "suitup",
      "category": "wedesign",
      "date": "11/2013 - 12/2013",
      "descriptionFR": "Suit Up est un projet de site e-commerce spécialisé dans le prêt-à-porter masculin. C'est un projet fictif de création d'identité et de design de site web.",
      "thumb": "styles/imgs/thumbs/suitup.png",
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
      ],
      "show": true
    },{
      "id": 2,
      "title": "La Bigoud'Anne",
      "ref": "bigoudanne",
      "category": "brand identity",
      "date": "08/2013",
      "descriptionFR": "Il s'agit de réaliser l'identité d'une chaîne de restaurants/crêperies fictive.",
      "thumb": "styles/imgs/thumbs/bigoudanne.png",
      "imgs": [
        {
          "title": "",
          "url": "styles/imgs/"
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
      ],
      "show": false
    },{
      "id": 3,
      "title": "Sia Vendée",
      "ref": "siavendee",
      "category": "webdesign",
      "date": "07/2013",
      "descriptionFR": "Ce projet est un des deux projets tests proposés lors d'un entretien pour un poste de webdesigner. Il s 'agit donc de la refonte du site d'agence immobillière regroupant les annonces exclusives de différentes agences. Le design a été établi à partir des éléments fournis: le logo et l 'arborescence. Cette dernière a toutefois été retravaillée dans le but de simplifier la navigation jugée trop complexe.",
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
      ],
      "show": false
    },{
      "id": 4,
      "title": "Camp' Atlantique",
      "ref": "campatlantique",
      "category": "webdesign",
      "date": "07/2013",
      "descriptionFR": "Ce projet est un des deux projets tests proposés lors d'un entretien pour un poste de webdesigner. Il s'agit donc de la refonte du site web regroupant plusieurs camping de diverses régions. La refonte s'inspire du site existant tout en le modernisant. J'ai également produit une démo web de la page d'accueil avec un slideshow et les interactions du menu.",
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
      ],
      "show": false
    }
  ];

  vm.show = function(index, evt) {
    evt.preventDefault();

    angular.forEach(vm.projects, function(project){
      project.show = false;
    });

    vm.projects[index-1].show = true;
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

}
