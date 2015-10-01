'use strict';

angular
    .module('idostuff')
    .controller('MapCtrl', function($scope) {
      
      var myCoords = new google.maps.LatLng(48.12136, -1.71412);

      var mapOptions = {
            center: myCoords,
            zoom: 16,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };

      var markerImg = {
            url: 'styles/imgs/marker.png',
            size: new google.maps.Size(72, 72),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(15, 37),
            scaledSize: new google.maps.Size(37, 37)
          };

      $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);    
            
      $scope.marker = new google.maps.Marker({
        flat: true,
        icon: markerImg,
        map: $scope.map,
        optimized: false,
        position: myCoords,
        title: 'Here I am !',
        visible: true
      });

      $scope.marker.content = '<div class="infoWindowContent">Here I am !</div>';


      $scope.infoWindow = new google.maps.InfoWindow();

      google.maps.event.addListener($scope.marker, 'click', function(){
            $scope.infoWindow.setContent('<h2 class="text-black">' + $scope.marker.title + '</h2><p class="text-black">25 Boulevard d\'anjou</p><p class="text-black">35000 RENNES</p><p class="text-black">FRANCE</p>');
            $scope.infoWindow.open($scope.map, $scope.marker);
      });


      var styles = [
        {
        "featureType": "landscape",
        "stylers": [
          { "color": "#777777" },
          { "visibility": "simplified" }
        ]
        },{
        "featureType": "administrative",
        "stylers": [
          { "visibility": "simplified" },
          { "color" : "#333333" }

        ]
        },{
        "featureType": "poi",
        "stylers": [
          { "visibility": "off" }
        ]
        },{
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          { "color": "#222222" },
          { "visibility": "simplified" }
        ]
        },{
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
          { "visibility": "on" },
          { "color": "#333333" },
          { "weight": 3.4 }
        ]
        },{
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          { "color": "#ffffff" }
        ]
        },{
        "featureType": "water",
        "stylers": [
          { "visibility": "on" },
          { "color": "#333333" }
        ]
        },{
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          { "visibility": "off" }
        ]
        },{
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          { "visibility": "off" }
        ]
        }
      ]

      var styledMap = new google.maps.StyledMapType(styles, {name: "map brain"});
  
      
      $scope.map.mapTypes.set('map_style', styledMap);
      $scope.map.setMapTypeId('map_style');

    });
