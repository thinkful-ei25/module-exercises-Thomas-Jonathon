'use strict';
/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars

// console.log(Item.validateName());
// console.log(Item.create('apple'));
// console.log(Item.foo);

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});