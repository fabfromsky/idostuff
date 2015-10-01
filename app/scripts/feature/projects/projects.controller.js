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
      "date": "11/2013 - 12/2013",
      "descriptionFR": "Suit Up est un projet de site e-commerce spécialisé dans le prêt-à-porter masculin. C'est un projet fictif de création d'identité et de design de site web.",
      "thumb": "",
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
      "date": "08/2013",
      "descriptionFR": "Il s'agit de réaliser l'identité d'une chaîne de restaurants/crêperies fictive.",
      "thumb": "",
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
      "id": 3,
      "title": "Sia Vendée",
      "date": "07/2013",
      "descriptionFR": "Ce projet est un de deux projets tests proposés lors d'un entretien pour un poste de webdesigner. Il s 'agit donc de la refonte du site d'agence immobillière regroupant les annonces exclusives de différentes agences. Le design a été établi à partir des éléments fournis: le logo et l 'arborescence. Cette dernière a toutefois été retravaillée dans le but de simplifier la navigation jugée trop complexe.",
      "thumb": "",
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

  vm.show = function(index) {
    var arrayIndex = index;
    console.log(arrayIndex);
    for(var i=0; i<vm.projects.size; i++) {
      vm.projects[i].show = false;
    }
/*    vm.projects.get[index].show = true;
*/  }

}
