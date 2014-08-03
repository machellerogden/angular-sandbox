console.log('@app');

var $ = require('jquery'),
    angular = require('angular'),
    app = angular.module('store', [ ]),
    gem = {
        name: "Dodecahedron",
        price: 2.95,
        description: "Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems."
    };

app.controller('StoreController', function () {
    this.product = gem;
});

module.exports = app;
