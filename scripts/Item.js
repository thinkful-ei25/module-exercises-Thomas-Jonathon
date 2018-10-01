'use strict';

const Item = (function() {
  const foo = 'bar';
  
  function validateName(name) {
    try {
      if (name === '') throw 'item does not exist';
      console.log(name);
    } 
    catch(err) {
      throw new Error(err);
    }
  }
  
  const create = function(name) { 
    return {
      id: cuid(),
      name: name,
      checked: false,
    };
  };

  return {
    validateName,
    create,
  };
}());

