(function () {
  'use strict';

  var app = angular.module('app');

  app.component('cards', {
    // Binds caption to the parent scope
    bindings: {
      caption: '<'
    },
    // Loads the component template
    templateUrl: '/js/components/cards.html',
    controller: function ($http) {
      this.cards = [];
      var self = this;
      $http.get('/data/cards.json').success(function(cards) {
        self.cards = cards;
      });
    }
  });
})();