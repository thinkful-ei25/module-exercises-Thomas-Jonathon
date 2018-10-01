'use strict';

const store = (function () {
  const store = {
    items: [
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'bread', checked: false }
    ],
    hideCheckedItems: false,
    searchTerm: '',

    findById: function(id) {
      return store.items.find(name => name.id === id);
    },

    toggleCheckedFilter: function() {
      this.hideCheckedItems = !this.hideCheckedItems;
    },

    setSearchTerm: function(searchTerm){
      this.searchTerm = searchTerm;
    },

    addItem: function(name) {
      try {
        console.log('addItem called');
        Item.validateName(name);
        console.log('validateName ran');
        this.items.push(Item.create(name));
        console.log('addItem ran');
      }
      catch(err) {
        console.log(`No item entered: ${err.message}`);
      }
    },

    findAndToggleChecked: function(id) {
      const currentId = this.findById(id);
      currentId.checked ? currentId.checked = false : currentId.checked = true;
    },

    findAndUpdateName: function(id, newName) {
      try {
        Item.validateName(newName);
        this.findById(id).name = newName;
      }
      catch(err) {
        console.log(`Cannot update name: ${err.message}`);
      }
    },

    findAndDelete: function(id) {
      const result = this.items.filter(name => { 
        return name.id !== id } );
      this.items = result;
    },

  };

  return {
    items: store.items,
    hideCheckedItems: store.hideCheckedItems,
    searchTerm: store.searchTerm,
    findById: store.findById,
    addItem: store.addItem,
    findAndToggleChecked: store.findAndToggleChecked,
    findAndUpdateName: store.findAndUpdateName,
    findAndDelete: store.findAndDelete,
    toggleCheckedFilter: store.toggleCheckedFilter,
    setSearchTerm: store.setSearchTerm,
  };
}() );

