(function () {
  'use strict';

  var app = angular.module('app');

  app.component('cards', {
    bindings: {
      caption: '<'
    },

    templateUrl: '/js/components/cards.html',

    controller: function ($http, $timeout) {
      this.cards = [];
      var self = this;
      $http.get('/data/cards.json').success(function(cards) {
        self.cards = cards;
      });

      var drag = function() {};
      var drop = function() {};
    }
  });
})();