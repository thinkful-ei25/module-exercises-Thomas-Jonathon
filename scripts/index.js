'use strict';
/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars

// console.log(Item.validateName());
// console.log(Item.create('apple'));
// console.log(Item.foo);

$(document).ready(function() {
  shoppingList.bindEventListeners();
  // shoppingList.render();
  const itemNames = [ '', 'apples', 'pears' ];
  itemNames.forEach(name => {
    try {
      Item.validateName(name);
      store.items.push(Item.create(name));
    } 
    catch(error) {
      console.log('Cannot add item: ' + error.message);
    }
  });
  shoppingList.render();
});