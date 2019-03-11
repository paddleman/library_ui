import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    saveBook(ev) {
      ev.preventDefault();
      let book = this.store.createRecord('book', this.model);

      book.save().then(() => {
        this.transitionToRoute('book');
      });

    },
    searchAuthor(query) {
      return this.store.query('author', { filter: { query }});
      
    }
  }

});
