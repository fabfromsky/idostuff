'use strict';

angular
  .module('idostuff')
  .controller('ContactCtrl', ContactCtrl);

function ContactCtrl() {
  
  var vm = this;

  vm.sendMail = function(e, data) {
    e.preventDefault();
    console.log(data);

    $.ajax({
      type: "POST",
      url: "sendMail.php",
      data: data,
      dataType: 'json',
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
  }
}
