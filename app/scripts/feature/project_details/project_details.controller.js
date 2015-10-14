'use strict';

angular
  .module('idostuff')
  .controller('ProjectDetailsCtrl', ['$state', '$controller', ProjectDetailsCtrl]);

/*  ProjectDetailsCtrl.$inject = ['$state'];
*/
function ProjectDetailsCtrl($state, $controller) {
  var vm = this;

  var listeProjects     = $controller('ProjectsCtrl').projects,
      currentProjectId  = $state.params.projectId;

  vm.currentProject = listeProjects[currentProjectId - 1];

  vm.currentImg = 0;

  vm.showImg = function(imageId, evt) {
    evt.preventDefault();
    this.currentImg = imageId;
  }

  vm.showNext = function(evt) {
    evt.preventDefault();
    if(this.currentImg == this.currentProject.imgs.length-1) {
      this.currentImg = 0
    } else {
      this.currentImg++;
    }
  }

  vm.showPrev = function(evt) {
    evt.preventDefault();
    if(this.currentImg == 0) {
      this.currentImg = this.currentProject.imgs.length-1;
    } else {
      this.currentImg--;
    }
  }
}