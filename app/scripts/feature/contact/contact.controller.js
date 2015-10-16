'use strict';

angular
  .module('idostuff')
  .controller('ContactCtrl', ContactCtrl);

ContactCtrl.$inject = ['$state'];
function ContactCtrl($state) {
  
  var vm = this;

  vm.success = false;

  vm.sendMail = function(e, data) {
    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "sendMail.php",
      data: data,
      dataType: 'json',
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }    
    }).fail(function() {
    }).done(function(){
    });
  }

  vm.back = function() {
    $state.transitionTo($state.current, $state.current.params, {
      reload: true,
      inherit: false,
      notify: true
    });
  }
}
