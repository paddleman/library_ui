import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    destroyBook() {
      this.model.destroyRecord().then(() => {
        this.transitionToRoute("book.index");
      });
    }
  }

});
