'use strict';

angular.module('NepPasalApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shipping', {
        title: 'Shipping Settings',
        url: '/shipping',
        templateUrl: 'app/shipping/shipping.html',
        controller: 'ShippingCtrl'
      });
  });
