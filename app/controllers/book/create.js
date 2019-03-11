import Controller from '@ember/controller';

export default Controller.extend({

  actions: {

    saveBook(attrs) {
      let book = this.store.createRecord('book', attrs);

      book.save().then(() => {
        this.transitionToRoute('book');
      });

    },
    searchAuthor(query) {
      return this.store.query('author', { filter: { query }});
      
    }
  }

});
