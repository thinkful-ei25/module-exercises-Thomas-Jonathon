'use strict';

const Item = (function() {
  const foo = 'bar';
  
  function validateName(name) {
    try {
      if (name === undefined) throw 'Name does not exist';
    } 
    catch(err) {
      console.log(err);
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

