import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    saveBook (ev) {
      ev.preventDefault();
      // this.model.book since in route has both author and book  
      let book = this.store.createRecord('book', this.model.book);

      book.save().then(() => {
        this.transitionToRoute('author.detail', this.model.author.id);
      });

    }
  }

});
