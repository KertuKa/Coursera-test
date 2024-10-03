(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);




ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    { name: "cookies", quantity: 10 },
    { name: "chocolate", quantity: 8 },
    { name: "eggs", quantity: 5 },
    { name: "milk", quantity: 3 },
    { name: "apples", quantity: 12 },
    { name: "carrots", quantity: 7 }
  ];

  var boughtItems = [];

  service.getToBuyItems = function () {
    return toBuyItems;
  }

  service.buyItem = function (itemIndex) {
    var item = toBuyItems[itemIndex];
    toBuyItems.splice(itemIndex, 1);
    boughtItems.push(item);
  }

  service.getBoughtItems = function () {
    return boughtItems;
  }
}
})();
