'use strict';

const Item = (function() {
  const foo = 'bar';
  return {
    item : 'test',
  };
}());


console.log(Item.item);
console.log(foo);



/*

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});
*/