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
      "summary": "SuitUp est un projet de site e-commerce spécialisé dans le prêt-à-porter masculin.",
      "description": [
        {
          "paragraph": "SuitUp part d'un constat personnel: il y'a trop peu de rayons 'homme' dans les magasins de vêtements. Il s'agit donc d'un site e-commerce exclusivement masculin."
        }, {
          "paragraph": "SuitUp a été pensé comme une marque de standing, l'identité devait donc refléter cet aspect de la marque. Le logo est l'élément principal caractérisant ce standing de part la police employée et le noeud papillon venant le souligner. Le site web se veut, quant à lui, sobre et élégant."
        }
      ],
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
      "summary": "Création d'identité pour une chaîne de restaurants-crêperies.",
      "description": [
        {
          "paragraph": "La Bigoud'Anne est une chaîne de restauration fictive créée pour le projet."
        },{
          "paragraph": "L'objectif de ce projet était de réaliser certains des éléments pouvant composer l'identité graphique d'une marque."
        },{
          "paragraph": "Le logo de la marque est inspiré d'un buste de marianne auquel on aurait ajouté une coiffe de bigoudènne. Les couleurs rappellent le blé noir et le froment, ingrédients essentiels de toutes les crêperies."
        },{
          "paragraph": "Le site web de la marque s'appuie sur ces couleurs pour superposer et mettre en avant certains éléments."
        }
      ],
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
          "title": "SIA website homepage",
          "url": "ecran1024_accueil.png"
        }, {
          "title": "SIA website my account",
          "url": "ecran1024_compte.png"
        }, {
          "title": "SIA website search",
          "url": "ecran1024_recherche.png"
        }, {
          "title": "SIA website homepage widescreen",
          "url": "ecran1380_accueil.png"
        }, {
          "title": "SIA webiste mobile",
          "url": "SIA-06.png"
        }, {
          "title": "SIA website mobile",
          "url": "siamobile.png"
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
          "title": "Camp'Atlantique website homepage",
          "url": "campatlantique_01_accueil.png"
        }, {
          "title": "Camp'Atlantique website campings list",
          "url": "campatlantique_02_campings.png"
        }, {
          "title": "Camp'Atlantique website camping details",
          "url": "campatlantique_03_camping_detail_01.png"
        }, {
          "title": "Camp'Atlantique website camping details",
          "url": "campatlantique_04_camping_detail_02.png"
        }, {
          "title": "Camp'Atlantique website contact",
          "url": "campatlantique_05_contact.png"
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
